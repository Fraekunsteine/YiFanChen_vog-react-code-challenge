const initialState = {
    posts: [],
    selectedPost: null
}
const homeReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GETALLPOSTS": return {
            ...state,
            posts: action.data
        };
        case "GETBYID": return {
            ...state,
            selectedPost: state.posts.find(el => el.id === action.id)
        };
        case "CLEARSEARCH": return {
            ...state,
            selectedPost: null
        };
        case "ADDPOST": return {
            ...state,
            posts: state.posts.concat(action.data)
        };
        case "EDITPOST": 
            let id = state.findIndex(el => el.id === action.id);           
            return {
                ...state,
                posts: state.posts.splice(id, 1, action.data)
            };
        case "DELETEPOST": 
            id = state.findIndex(el => el.id === action.id);           
            return {
                ...state,
                posts: state.posts.splice(id, 1)
            };
        default: return state;
    }
}
export default homeReducer;