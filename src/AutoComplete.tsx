import * as React from 'react';
import { useState, useEffect } from "react";
import { Autocomplete, TextField } from '@mui/material';


export let TOTAL_ANIME = 10;
export let currentGuess_ID = 0;

interface Option {
    label: string;
    id: number;
}

var data = require('./solutions.json')

var allTitles = []
for(let i = 0;i < TOTAL_ANIME; i ++){
  allTitles.push({label: data.data[i].node.title, id: data.data[i].node.id});
}

const options: Option[] = allTitles
  
const AutocompleteForm = () => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Submitted with option:', selectedOption);
        currentGuess_ID = selectedOption!.id
        console.log(currentGuess_ID)
    };

    return (
    <form onSubmit={handleSubmit}>
    <Autocomplete
        options={options}
        getOptionLabel={(option) => option.label}
        value={selectedOption}
        onChange={(event, newValue) => {
        setSelectedOption(newValue);
        }}
        renderInput={(params) => (
        <TextField {...params} label="Select an option" variant="outlined" />
        )}
    />
    <button type="submit">Submit</button>
    </form>
    );
};

export default AutocompleteForm
