import React from 'react';
import classes from '*.module.css';
import { makeStyles } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles({
    root: {
        width: '90%',
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: '5%',
        paddingRight: '5%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottom: '1px solid black',
        position: 'absolute',
        top: 0,
        backgroundColor: 'white',
        zIndex: 9999
    }, 
    logo: {
        flexGrow: 1
    }
});

export const NavBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1 className={classes.logo}>Shope</h1>
            <PersonIcon />

        </div>
    )
};