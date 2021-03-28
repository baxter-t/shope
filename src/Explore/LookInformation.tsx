import React from 'react';
import { Button, Chip, Grid, Link, makeStyles } from '@material-ui/core';
import { ItemDisplay } from './ItemDisplay';
import { Garment } from '../shared/ResponseTypes';

type LookInformationProps = {
    items: Array<Garment>;
}

const useStyles = makeStyles({
    root: {
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    clothingItem: {
        textAlign: 'center'
    },
});

const renderItems = (items: Array<Garment>) => {
    return items.map(item => {
        return (
            <Grid item xs style={{textAlign: 'center'}}>
                <ItemDisplay item={item} />
            </Grid>
        )
    })
}

export const LookInformation = (props: LookInformationProps) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h2>About This Look</h2>


            <Grid container direction="row" justify="center" alignItems="flex-start" xs={12}>
                {renderItems(props.items)}
            </Grid>
        </div>
    )
}