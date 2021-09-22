import React, { useState } from 'react';
import css from './SearchBar.module.css'
import { Button, Input } from '@material-ui/core'

function SearchBar(props) {
    const [searchInput, setInput] = useState("");
    const updateInput = (e) => {
        setInput(e.target.value);
        console.log(searchInput);      
    }

    return (
        <div className={css.Main}>
            <Input
                fullWidth={true}
                placeholder={"Search by "+props.type}
                label="Search"
                type="text"
                variant="standard"
                value={searchInput}
                onChange={updateInput}
            />
            <Button onClick={() => props.search(searchInput)}>Search</Button>
        </div> 
    );
}

export default SearchBar;