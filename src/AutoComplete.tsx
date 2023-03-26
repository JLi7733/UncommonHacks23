import * as React from 'react';
import { useState, useEffect } from "react";
import { Autocomplete, TextField } from '@mui/material';


export let TOTAL_ANIME = 10;
interface Option {
    label: string;
  }

  var data = require('./solutions.json')

var allAnimes = []
for(let i = 0;i < TOTAL_ANIME; i ++){
    allAnimes.push({label: data.data[i].node, value: data.data[i].node.id});
}
console.log(allAnimes)

var allTitles = []
for(let i = 0;i < TOTAL_ANIME; i ++){
  allTitles.push({label: data.data[i].node.title, value: data.data[i].node.id});
}
console.log(allTitles);

const options: Option[] = allTitles
  
const AutocompleteForm = () => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Submitted with option:', selectedOption);
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
