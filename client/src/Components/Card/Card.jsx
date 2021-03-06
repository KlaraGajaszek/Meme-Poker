import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';

import cardStyles from './CardStyles';
import { useBackend } from 'hooks/useBackend';
import { useUserContext } from 'Contexts/UserContext';

const MemeCard = ({ value, img, selected, selectCard, id }) => {
  const classes = cardStyles();
  const sendEstimation = useBackend('USER_VOTE');
  const { user } = useUserContext();

  const onClickHandler = () => {
    if (!user.isObserver) {
      sendEstimation({ value });
      selectCard(id);
    }
  };

  return (
    <Card className={selected ? classes.selected : classes.main} variant="outlined">
      <CardActionArea onClick={onClickHandler} className={user.isObserver ? classes.cards : ''}>
        <CardMedia className={classes.media} component="img" alt={value} src={img} height="50" />
        <CardContent className={classes.content}>
          <Typography className={classes.contentText} variant="body2">
            {value}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MemeCard;
