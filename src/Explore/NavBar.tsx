import React from 'react';
import classes from '*.module.css';
import { makeStyles, TextField } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    root: {
        width: '100%',
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
    },
    searchContainer: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center'
    }
});

export const NavBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1 className={classes.logo}>Shope</h1>
            <div className={classes.searchContainer}>
                <input className="nav-search-input" type="text" placeholder="Search"></input>
            </div>
            <PersonIcon />

        </div>
    )
};