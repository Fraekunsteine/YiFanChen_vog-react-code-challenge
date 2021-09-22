const getAllPosts = (_data) => {
    return { 
        type: "GETALLPOSTS",
        data: _data
    }
}
const getPostById = (_id) => {
    return { 
        type: "GETBYID",
        id: _id
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
    getPostById,
    addPost,
    editPost,
    deletePost
};