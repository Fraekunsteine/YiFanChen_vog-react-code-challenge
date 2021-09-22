import React, { useEffect, useState } from 'react';
import css from './university.module.css';
import universityActions from '../actions/uniApi'
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

function UniversityPage(props) {
    const university = useSelector(state => state.universityReducer);
    const dispatch = useDispatch();
    const [country, setCountry] = useState("");
    const selectCountry = (e) => {
        setCountry(e.target.value);
    }

    useEffect(() => {
        dispatch(universityActions.retrieveCountries());
        dispatch(universityActions.retrieveUniversities());
    }, []);
    useEffect(() => {
        if(country) {
            let selected = university.allUniversities.filter(uni => uni.alpha_two_code === country.alpha2Code);
            dispatch(universityActions.getSelectedUniversities(selected));
            dispatch(universityActions.selectCountry(country.name));
        }
    }, [country]);

    return(
        <div className={css.Content}>
            <FormControl variant='outlined' fullWidth>
                <InputLabel id="select-label">Country</InputLabel>
                <Select
                    labelId="select-label"
                    id="select-country"
                    value={country}
                    label="country"
                    onChange={selectCountry}
                >
                    {university.countries.map(country => (
                        <MenuItem value={country} key={country.name}>{country.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <div className={css.Display}>
                {university.selectedUniversities.map((uni) => (
                    <div className={css.University} key={uni.name}>
                        <h3>{uni.name}</h3>
                        <h5>{uni.country}</h5>
                        <p>{uni.web_pages}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UniversityPage;