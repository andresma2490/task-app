import { createMuiTheme } from '@material-ui/core/styles';
import { teal, } from '@material-ui/core/colors';

// for edit the de,fault theme
const themeConfig = createMuiTheme({
    palette: {
        primary: {
          main: teal[700],
        },
    },
    mixins:{
        toolbar:{
            height: 50
        }
    }
});

export default themeConfig;