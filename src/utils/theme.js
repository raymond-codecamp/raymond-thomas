import {createMuiTheme} from '@material-ui/core/styles';
import {Maroon, White} from './colors';

const Muli = require('typeface-muli');
export const theme = createMuiTheme({
    palette: {
      primary: {main : Maroon},
      secondary: {main: White},
    },
    status: {
      danger: 'orange',
    },
    typography:{
        root:{
            fontFamily: Muli,
        },
        body1:{
            fontSize: 18,
        }
        
    }
  });