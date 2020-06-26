import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Grid, Paper, Box } from '@material-ui/core';

import { useUserContext } from 'Contexts/UserContext';
import Cards from 'Components/Cards';
import RoomStyles from './RoomStyles';
import TaskNameInput from 'Components/TaskNameInput';
import InfoBox from 'Components/InfoBox';
import UserBox from 'Components/UserBox';
import ContainerApp from 'Components/ContainerApp';
import Results from 'Components/Results';

const Room = () => {
  const classes = RoomStyles();

  const { name } = useUserContext();
  const { roomId } = useParams();

  if (!name) return <Redirect to={`/room/${roomId}/join`} />;

  return (
    <ContainerApp>
      <Grid container spacing={5}>
        <Grid item xs={12} md={8} className={classes.main}>
          <Box className={classes.top} component="div">
            <UserBox />
            <Box className={classes.info}>
              <InfoBox title="Timer" value="00:22:33" />
              <InfoBox title="Room ID" value={roomId} />
            </Box>
          </Box>
          <Paper className={classes.cards}>
            <Box mb={2}>
              <TaskNameInput />
            </Box>
            <Cards />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Results />
        </Grid>
      </Grid>
    </ContainerApp>
  );
};

export default Room;
