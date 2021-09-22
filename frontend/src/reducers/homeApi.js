
const homeReducer = (state = [], action) => {
    switch(action.type) {
        case "GETALLPOSTS": return action.data;
        case "GETBYID": return state.filter(el => el.id === action.id);
        case "ADDPOST": return state.concat(action.data);
        case "EDITPOST": 
            let id = state.findIndex(el => el.id === action.id);           
            return state.splice(id, 1, action.data);
        case "DELETEPOST": 
            id = state.findIndex(el => el.id === action.id);           
            return state.splice(id, 1);
        default: return state;
    }
}
export default homeReducer;