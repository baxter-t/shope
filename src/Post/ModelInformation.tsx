import { Button, Chip, Grid, Link, makeStyles } from '@material-ui/core';
import React from 'react';
import { FaTshirt, FaRulerVertical, FaRulerHorizontal, FaHourglassEnd, FaInstagram, FaTwitter } from 'react-icons/fa';
import { isPropertySignature } from 'typescript';
import { User } from '../shared/ResponseTypes';

type ModelInformationProps = {
    user: User;
}

const useStyles = makeStyles({
    root: {
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    username: {
        flexGrow: 1
    },
    measurement: {
        marginRight: '7px',
        padding: '2px'
    },
    socialIcon: {
        fontSize: 30,
        paddingRight: 20
    }
});

export const ModelInformation = (props: ModelInformationProps) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container direction="row" justify="flex-start" alignItems="center">
                <h1 className={classes.username}>@{props.user.username}</h1>
                <Link className={classes.socialIcon} href="#" color="inherit"><FaInstagram /></Link>
                <Link className={classes.socialIcon} href="#" color="inherit"><FaTwitter /></Link>
            </Grid>
        </div>
    )
}