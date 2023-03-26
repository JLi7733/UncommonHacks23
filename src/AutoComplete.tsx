import * as React from 'react';
import { useState, useEffect } from "react";
import { Autocomplete, TextField } from '@mui/material';

export let TOTAL_ANIME = 10;
let currentGuess_ID = 0;

interface Option {
    label: string;
    id: number;
    
}

var data = require('./solutions.json')

var allTitles = []
for(let i = 0;i < TOTAL_ANIME; i ++){
    let anime = data.data[i].node
    allTitles.push({label: anime.title, id: anime.id});
}

interface Props {
    changeGuess: (newGuess: number) => void;
}

const options: Option[] = allTitles
  
const AutocompleteForm = ({changeGuess}: Props) => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Submitted with option:', selectedOption);
        changeGuess(selectedOption!.id)
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
        style = {{color:'white', backgroundColor:'darkgray'}}
    />
    <button type="submit">Submit</button>
    </form>
    );
};

export default AutocompleteForm
