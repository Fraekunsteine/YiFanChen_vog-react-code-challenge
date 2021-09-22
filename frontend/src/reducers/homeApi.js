
const homeReducer = (state = [], action) => {
    switch(action.type) {
        case "GETALLPOSTS": return state.length > 0 ? state : state.concat(action.data);
        case "ADDPOST": return state.concat(action.data);
        case "EDITPOST": 
            let id = state.findIndex(el => el.id === parseInt(action.id));
            newState = state.splice(id, 1, action.data);
            return {...state};
        case "DELETEPOST": return {...state};
        default: return state;
    }
}
export default homeReducer;