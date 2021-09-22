const getAllPosts = (_data) => {
    return { 
        type: "GETALLPOSTS",
        data: _data
    }
}
const getPostById = (_id) => dispatch => {
    dispatch({ 
        type: "GETBYID",
        id: _id
    })
}
const clearSearch = () => {
    return { type: "CLEARSEARCH" }
}
const addPost = (_data) => dispatch => {
    dispatch({ 
        type: "ADDPOST",
        data: _data
    });
}
const editPost = (_id, _data) => dispatch => {
    dispatch({ 
        type: "EDITPOST",
        id: _id,
        data: _data
    });
}
const deletePost = (_id) => dispatch => {
    dispatch({ 
        type: "DELETEPOST",
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