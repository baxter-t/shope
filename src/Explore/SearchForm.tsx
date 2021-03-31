import { TextField } from '@material-ui/core';
import React from 'react';
import { MeasurementsInput } from './MeasurementsInput';

export const SearchForm = () => {

    return (
        <form>
            <h2>Search</h2>
            <TextField id="standard-basic" label="Search" />
            {/* <MeasurementsInput /> */}
            <h3>Tags</h3>

        </form>
    )
}