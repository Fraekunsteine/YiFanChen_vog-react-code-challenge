import axios from "axios";

const lookup = (code) => dispatch => {
    axios.get(`https://api.zippopotam.us/us/${code}`).then(response => {
        //console.log(response)
        dispatch({
            type: "LOOKUP",
            data: response.data
        });
    }).catch(error => {
        console.log(error);
        alert("Error processing request");
        dispatch(updateMessage("Could not retrieve area details"));
    });
}
const clearSearch = () => {
    return {
        type: "CLEAR_SEARCH",
    };
}
const updateMessage = (msg) => {
    return {
        type: "UPDATE_MESSAGE",
        message: msg
    };
}

export default {
    lookup,
    clearSearch
};