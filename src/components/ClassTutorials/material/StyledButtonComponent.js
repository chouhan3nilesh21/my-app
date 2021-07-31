import React from 'react';
import { Button,makeStyles} from '@material-ui/core';

const useStyles=makeStyles(
    {
        root:{
            background:'linear-gradient(45deg,#2884f0,#40d50a)',
            border:0,
            borderRadius:15,
            color:'white',
            padding:'0 30px'
        }
    }
)


export default function StyledButtonComponent() {
    const classes=useStyles();
    return (
        <div>
            <Button className={classes.root} size="large">Styled Button</Button>
        </div>
    )
}
