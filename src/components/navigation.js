import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Grid,
    Typography,
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {Maroon, Gray} from 'utils/colors';
import {HOME} from 'utils/constants';

const useStyles = makeStyles((theme)=>({
    root:{
        display: "flex",
    },
    item:{

    },
    link:{
        textDecoration:"none",
        color: Gray,
    }
}));

function Navigation()
{
    const classes = useStyles();
    return(
        <>
            <Grid
                container
                justify="space-evenly"
                alignItems="flex-end"
                style={{
                    minWidth: "20vh",
                    maxWidth: "100vh"
                }}
            >
                <Grid
                    item
                >
                    <Typography
                        variant="body1"
                        className={classes.item}
                    >
                        <Link
                            to={HOME}
                            className={classes.link}
                        >
                            Home
                        </Link>
                    </Typography>
                </Grid>
                <Grid
                    item
                >
                    <Typography
                        variant="subtitle1"
                        className={classes.item}
                    >
                        <Link
                            to={HOME}
                            className={classes.link}
                        >
                            About Me
                        </Link>
                    </Typography>
                </Grid>
                <Grid
                    item
                >
                    <Typography
                        variant="subtitle1"
                        className={classes.item}
                    >
                        <Link
                            to={HOME}
                            className={classes.link}
                        >
                            Contact
                        </Link>
                    </Typography>
                </Grid>
            </Grid>

        </>
    );
}
export default Navigation;