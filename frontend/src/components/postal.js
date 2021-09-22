import { React, useState} from 'react';
import css from './postal.module.css'
import { Input } from '@material-ui/core';
import SearchBar from './SearchBar';

function PostalLookup(props) {
    const search = () => {

    }
    const clearSearch = () => {

    }

    return(
        <div className={css.Content}>
            <h1>Area Detail Lookup</h1>
            <SearchBar search={search} clearSearch={clearSearch} defaultText="Enter an US postal code..."></SearchBar>
        </div>
    );
}

export default PostalLookup;