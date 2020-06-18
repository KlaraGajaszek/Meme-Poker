import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#64dd17',
    },
    secondary: {
      main: '#2b570e',
    },
    background: {
      default: '#616161',
      paper: '#303030',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

export default theme;
