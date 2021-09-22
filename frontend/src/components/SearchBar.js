import React, { useState } from 'react';
import css from './SearchBar.module.css'
import { Button, Input } from '@material-ui/core'

function SearchBar(props) {
    const [searchInput, setInput] = useState("");
    const updateInput = (e) => {
        setInput(e.target.value);
    }
    const clearSearch = () => {
        props.clearSearch();
        setInput("");
    }
    return (
        <div className={css.Main}>
            <Input
                placeholder={props.defaultText}
                label="Search"
                type="text"
                variant="standard"
                value={searchInput}
                onChange={updateInput}
            />
            <Button variant='contained' onClick={() => props.search(searchInput)}>Search</Button>
            <Button variant='contained' onClick={() => clearSearch()}>Clear Search</Button>
        </div> 
    );
}

export default SearchBar;