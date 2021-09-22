const initialState = {
    countries: [],
    selectedCountry: null,
    allUniversities: [],
    selectedUniversities: [],
    message: ""
}
const universityReducer = (state = initialState, action) => {
    switch(action.type) {
        case "UPDATE_COUNTRIES": return {
            ...state,
            countries: action.data
        };
        case "SELECT_COUNTRY": return {
            ...state,
            selectedCountry: action.data
        }
        case "GET_ALL_UNIVERSITIES": return {
            ...state,
            allUniversities: action.data
        };
        case "GET_SELECTED_UNIVERSITIES": return {
            ...state,
            selectedUniversities: action.data
        };
        case "UPDATE_MESSAGE": return {
            ...state,
            message: action.message
        };
        default: return state;
    }
}
export default universityReducer;