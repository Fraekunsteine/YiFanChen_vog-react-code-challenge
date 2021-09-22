const initialState = {
    areaDetails: null,
    message: ""
}
const postalReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOOKUP": return {
            ...state,
            areaDetails: action.data
        }
        case "CLEAR_SEARCH": return {
            ...state,
            areaDetails: null
        }
        case "UPDATE_MESSAGE": return {
            ...state,
            message: action.message
        };
        default: return state;
    }
}
export default postalReducer;