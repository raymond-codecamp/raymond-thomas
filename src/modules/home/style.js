import { makeStyles } from '@material-ui/core/styles';
import {Silver} from 'utils/colors';
export const useStyles = makeStyles((theme)=>({
    root:{
        display: "flex",
    },
    avatar:{
        width: "25vh",
        height: "25vh",
        borderRadius: "50%",
    },
    me:{
        maxWidth: "100vh",

    },
    metext:{
        textAlign: "justify",
        lineHeight: theme.spacing(4),
    },
    quote:{
        fontSize: 45,
        fontWeight: "bold",
    },
}));