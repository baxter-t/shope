import { Grid, InputLabel, makeStyles, MenuItem, Select, Slider, TextField } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    slider: {
        height: 300,
    }
});

const heightMarks = [
    { value: 0, label: '0 cm' },
    { value: 250, label: '250 cm' }
]

function getHeightText(value: number) {
    return `$(value) cm`
}

export const MeasurementsInput = () => {
    const classes = useStyles();

    return (
        <form action="">
            <h3>Your Body</h3>
            <TextField id="outlined-basic" type="number" label="Height" variant="outlined" />
            <TextField id="outlined-basic" type="number" label="Bust" variant="outlined" />
            <TextField id="outlined-basic" type="number" label="Waist" variant="outlined" />
            <TextField id="outlined-basic" type="number" label="Hips" variant="outlined" />
            <TextField id="outlined-basic" type="number" label="Shoulders" variant="outlined" />

            <InputLabel id="cup-size-select-label">Cup Size</InputLabel>
            <Select
                labelId="cup-size-select-label"
                id="cup-size-select"
            >
                <MenuItem value={10}>A</MenuItem>
                <MenuItem value={20}>B</MenuItem>
                <MenuItem value={30}>C</MenuItem>
                <MenuItem value={40}>D</MenuItem>
                <MenuItem value={50}>DD</MenuItem>
                <MenuItem value={60}>E</MenuItem>
                <MenuItem value={70}>F</MenuItem>
                <MenuItem value={80}>FF</MenuItem>
            </Select>
        </form>
    )
}