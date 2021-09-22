const getAllPosts = (_data) => {
    return { 
        type: "GET_ALL_POSTS",
        data: _data
    }
}
const getPostById = (_id) => dispatch => {
    dispatch({ 
        type: "GET_BY_ID",
        id: _id
    })
}
const clearSearch = () => {
    return { type: "CLEAR_SEARCH" }
}
const addPost = (_data) => dispatch => {
    dispatch({ 
        type: "ADD_POST",
        data: _data
    });
}
const editPost = (_id, _data) => dispatch => {
    dispatch({ 
        type: "EDIT_POST",
        id: _id,
        data: _data
    });
}
const deletePost = (_id) => dispatch => {
    dispatch({ 
        type: "DELETE_POST",
        id: _id
    });
}

export default {
    getAllPosts,
    getPostById,
    clearSearch,
    addPost,
    editPost,
    deletePost
};