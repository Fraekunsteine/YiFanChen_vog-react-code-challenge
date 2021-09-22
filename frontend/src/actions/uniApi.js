import axios from "axios";

const retrieveCountries = () => dispatch => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
        //console.log(response)
        dispatch(updateCountries(response.data));
    }).catch(error => {
        console.log(error);
        dispatch(updateMessage("Could not retrieve countries"));
    });
}
const selectCountry = (country) => dispatch => {
    axios.get(`https://restcountries.com/v2/name/${country}/`).then(response => {
        //console.log(response)
        dispatch({
            type: "SELECT_COUNTRY", 
            data: response.data
        });
    }).catch(error => {
        console.log(error);
        dispatch(updateMessage("Could not retrieve countries"));
    });
}
const updateCountries = (_data) => {
    return {
        type: "UPDATE_COUNTRIES",
        data: _data
    };
}
const retrieveUniversities = () => dispatch => {
    axios.get(`http://universities.hipolabs.com/search`).then(response => {
        dispatch({
            type: "GET_ALL_UNIVERSITIES",
            data: response.data
        })
    }).catch(error => {
        console.log(error);
        dispatch(updateMessage("Invalid selection"));
    });
}
const getSelectedUniversities = (_data) => {
    return {
        type: "GET_SELECTED_UNIVERSITIES",
        data: _data
    };
}
const updateMessage = (msg) => {
    return {
        type: "UPDATE_MESSAGE",
        message: msg
    };
}

export default {
    retrieveCountries,
    selectCountry,
    retrieveUniversities,
    getSelectedUniversities
};