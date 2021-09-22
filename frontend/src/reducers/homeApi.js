const initialState = {
    posts: [],
    selectedPost: null,
}
const homeReducer = (state = initialState, action) => {
    let id = -1;
    switch(action.type) {
        case "GET_ALL_POSTS": 
            if(state.posts.length > 0) return state;
            else return {
                ...state,
                posts: action.data
            };
        case "GET_BY_ID": 
            id = state.posts.findIndex(el => el.id === action.id);
            if(id === -1) return state;
            else return {
                ...state,
                selectedPost: state.posts[id]
            };
        case "CLEAR_SEARCH": return {
            ...state,
            selectedPost: null
        };
        case "ADD_POST": return {
            ...state,
            posts: state.posts.concat(action.data)
        };
        case "EDIT_POST": 
            id = state.posts.findIndex(el => el.id === action.id);
            if(id === -1) return state;
            else {
                let temp = [...state.posts];
                temp.splice(id, 1, action.data);
                return {
                    ...state,
                    posts: temp
                };
            }
        case "DELETE_POST": 
            id = state.posts.findIndex(el => el.id === action.id);
            if(id === -1) return state;
            else {
                let temp = [...state.posts];
                temp.splice(id, 1);
                return {
                    ...state,
                    posts: temp
                };
            }
        default: return state;
    }
}
export default homeReducer;