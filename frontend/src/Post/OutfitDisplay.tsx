import { Button, Grid, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { FaTimes, FaTshirt } from 'react-icons/fa';
import {ItemDisplay} from './ItemDisplay';
import {ModelMeasurements} from './ModelMeasurements';
import {LookInformation} from './LookInformation';
import { ItemType, MeasurementType, SocialType } from '../shared/ResponseTypes';
import { ModelInformation } from './ModelInformation';

type OutfitDisplayProps = {
    imgUrl: string;
}

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        maxWidth: '700px',
        maxHeight: '85%',
        overflow: 'scroll',
        backgroundColor: 'white',
        borderRadius: '10px',
        paddingBottom: '40px'
    },
    img: {
        width: '100%'
    },
    closeButton: {
        fontSize: 30,
        position: 'fixed',
        paddingTop: '15px',
        right: 0,
        color: 'dark grey'
    }
});

const apiResponse = {
    imgUrl: "https://i.pinimg.com/originals/94/17/36/9417362ea88b3202754ccb9c94789955.jpg",
    user: {
        username: "rachelmegg",
        socials: [
            {
                site: SocialType.Instagram,
                link: "www.instagram.com"
            }
        ],
        measurements: [
            {
                measurementType: MeasurementType.Bust,
                measurementName: "Bust",
                measurementValue: "66cm"
            },
            {
                measurementType: MeasurementType.Waist,
                measurementName: "Waist",
                measurementValue: "66cm"
            },
            {
                measurementType: MeasurementType.Height,
                measurementName: "Height",
                measurementValue: "156cm"
            },
            {
                measurementType: MeasurementType.Weight,
                measurementName: "Weight",
                measurementValue: "56kg"
            },
            {
                measurementType: MeasurementType.Custom,
                measurementValue: "Curvy"
            }
        ]
    },
    items: [
        {
            itemType: ItemType.Top,
            name: "Adidas Crop",
            size: "6",
            shopLink: "www.google.com"
        },
        {
            itemType: ItemType.Pants,
            name: "Levi 505 Jean",
            size: "6",
            shopLink: "www.google.com"
        },
        {
            itemType: ItemType.Shoes,
            name: "Nike Air Force 1s",
            size: "7",
            shopLink: "www.google.com",
            coupon: "ALEX10"
        }
    ]
}

export const OutfitDisplay = (props: OutfitDisplayProps) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                <Button className={classes.closeButton}><FaTimes /></Button>
                <Grid item xs={12}>
                    <img className={classes.img} src={props.imgUrl} />
                </Grid>

                <Grid item xs={12}>
                    <ModelInformation user={apiResponse.user} />
                </Grid>

                <Grid item xs={12}>
                    <LookInformation items={apiResponse.items}/>
                </Grid>

                <Grid item xs={12}>
                    <ModelMeasurements measurements={apiResponse.user.measurements}/>
                </Grid>
            </Grid>
        </div>
    )
}