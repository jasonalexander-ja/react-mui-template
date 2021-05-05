import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    helloThereStyle: {
        fontStyle: "oblique",
        fontWeight: 500,
        fontSize: 75,
        color: "grey"
    },
    buttonStyle: {
        color: "green",
        border: 0
    }
});

// export default A
export default function App(props) {
    const classes = useStyles();


    return (
        <div>
            <Typography
                className={classes.helloThereStyle}
                variant="h1"
                color="primary"
            >
                Hello World
            </Typography>
            <Button
                className={classes.buttonStyle}
                variant="outlined"
                color="primary"
            >
                This is a button
            </Button>
        </div>
    );
}
