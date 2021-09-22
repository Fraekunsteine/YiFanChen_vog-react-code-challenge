const getAllPosts = (_data) => {
    return { 
        type: "GETALLPOSTS",
        data: _data
    }
}
const addPost = (_data) => {
    return { 
        type: "ADDPOSTS",
        data: _data
    };
}
const editPost = (_id, _data) => {
    return { 
        type: "EDITPOSTS",
        id: _id,
        data: _data
    };
}
const deletePost = (_id) => {
    return { 
        type: "DELETEPOSTS",
        id: _id
    };
}

export default {
    getAllPosts,
    addPost,
    editPost,
    deletePost
};