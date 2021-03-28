import { Button, Chip, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { FaTshirt, FaRulerVertical, FaRulerHorizontal, FaHourglassEnd, FaHashtag, FaWeight } from 'react-icons/fa';
import { Measurement, MeasurementType } from '../shared/ResponseTypes';

type ModelMeasurementsProps = {
    measurements: Array<Measurement>;
}

const useStyles = makeStyles({
    root: {
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    measurement: {
        marginRight: '7px',
        padding: '2px'
    }
});

const getMeasurementIcon = (measurementType: MeasurementType) => {
    switch(measurementType) {
        case MeasurementType.Height: {
            return (<FaRulerVertical />);
        } 
        case MeasurementType.Weight: {
            return (<FaWeight />)
        }
        case MeasurementType.Custom: {
            return (<FaHashtag />);
        }
        default: {
            return (<FaRulerHorizontal />)
        }
    }
}

const renderMeasurements = (measurements: Array<Measurement>) => {
    return measurements.map(measurement => {
        var measurementLabel: string;

        if (measurement.measurementName) {
            measurementLabel = measurement.measurementName + ": " + measurement.measurementValue;
        } else {
            measurementLabel = measurement.measurementValue;
        }

        return (
            <Chip
                style={{marginRight: '7px', padding: '2px'}}
                avatar={getMeasurementIcon(measurement.measurementType)}
                label={measurementLabel}
                variant="outlined" />
        )
    })
}

export const ModelMeasurements = (props: ModelMeasurementsProps) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h2>About This Model</h2>
            <Grid container direction="row" justify="flex-start" alignItems="center">
                {renderMeasurements(props.measurements)}
            </Grid>
        </div>
    )
}