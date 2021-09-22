import { React, useState} from 'react';
import css from './postal.module.css'
import { useDispatch, useSelector } from 'react-redux';
import postalActions from '../actions/postalApi'
import SearchBar from './SearchBar';

function PostalLookup(props) {
    const postal = useSelector(state => state.postalReducer);
    const dispatch = useDispatch();
    const search = (input) => {
        dispatch(postalActions.lookup(parseInt(input)))
    }
    const clearSearch = () => {
        dispatch(postalActions.clearSearch());
    }
        
    return(
        <div className={css.Content}>
            <h1>US Area Detail Lookup</h1>
            <SearchBar 
                search={search} 
                clearSearch={clearSearch} 
                defaultText="Enter an US postal code... (eg. 90210)"
            />
            <div className={css.Display}>
                {postal.areaDetails ? 
                    <div>
                        <h1>{postal.areaDetails.country} - {postal.areaDetails['post code']}</h1>
                        <h3>Places</h3>
                        {postal.areaDetails.places.map(place => (
                            <div className={css.Place} key={place['place name']}>
                                <h4>{place['place name']}, {place.state}</h4>
                                <p>Longtitude: {place.longitude}</p>
                                <p>Latitude: {place.latitude}</p>
                            </div>
                        ))}
                    </div>
                : null }
                
            </div>
        </div>
    );
}

export default PostalLookup;