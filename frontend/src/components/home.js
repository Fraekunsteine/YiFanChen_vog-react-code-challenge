import React, { useEffect, useState } from 'react';
import css from './home.module.css';
import homeActions from '../actions/homeApi';
import Modal from 'react-modal';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ModalDialog from './modal';
import SearchBar from './SearchBar';
import { Button } from '@material-ui/core';

function HomePage(props) {
    const posts = useSelector(state => state.homeReducer);
    const dispatch = useDispatch();
    const [showDialog, setShowDialog] = useState("");
    const loadPosts = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
            dispatch(homeActions.getAllPosts(response.data));
        }).catch(error => {
            console.log(error);
        }); 
    }
    const search = (id) => {
        dispatch(homeActions.getPostById(parseInt(id)));
    }
    const clear = (id) => {
        dispatch(homeActions.clearSearch());
    }
    const addPost = (_title, _body, uid) => {       
        let post = {
            title: _title,
            body: _body,
            userId: uid
        };       
        axios.post("https://jsonplaceholder.typicode.com/posts", post, {
            headers: { 'Content-Type': 'application/json' }
        }).then(response => {
            dispatch(homeActions.addPost(response.data));
        }).catch(error => {
            console.log(error);   
        });
    }
    const editPost = (_id, _title, _body, uid) => {
        let post = {
            userId: uid,
            id: _id,
            title: _title,
            body: _body
        };        
        axios.put(`https://jsonplaceholder.typicode.com/posts/${_id}`, post, {
            headers: { 'Content-Type': 'application/json' }
        }).then(response => {
            dispatch(homeActions.editPost(_id, response.data));
        }).catch(error => {
            console.log(error);
            if(error.response && error.response === 500) alert("Invalid input for post id!");
        });
    }
    const deletePost = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then(() => {
            dispatch(homeActions.deletePost(id));
        }).catch(error => {
            console.log(error);
            if(error.response && error.response === 500) alert("Invalid input for post id!");
        });
    }

    useEffect(() => {
        Modal.setAppElement("#root");
        loadPosts();      
    }, [])

    return(
        <div className={css.HomeMain}>
            <SearchBar search={search} clearSearch={clear} defaultText="Search by id"></SearchBar>
            <div className={css.Display}>
                {posts.selectedPost ? 
                    <div className={css.Post}>
                        <h3>{posts.selectedPost.title} - ID: {posts.selectedPost.id}</h3>
                        <h5>By: User{posts.selectedPost.userId}</h5>
                        <p>{posts.selectedPost.body}</p>
                    </div> 
                    : posts.posts.map((post) => (
                        <div className={css.Post} key={post.id}>
                            <h3>"{post.title}" - ID: {post.id}</h3>
                            <h5>By: User{post.userId}</h5>
                            <p>{post.body}</p>
                        </div>
                     ))}
            </div>
            <div className={css.Controls}>
                <Button variant='outlined' color='primary' onClick={() => setShowDialog("Add")}>Add</Button>
                <Button variant='outlined' onClick={() => setShowDialog("Edit")}>Edit</Button>
                <Button variant='outlined' color='secondary' onClick={() => setShowDialog("Delete")}>Delete</Button>
            </div>
            <Modal
                isOpen={showDialog !== ""}
                onRequestClose={() => setShowDialog("")}
                contentLabel="Modal Dialog"               
            >
                <ModalDialog 
                    mode={showDialog} 
                    addPost={addPost}
                    editPost={editPost}
                    deletePost={deletePost}
                    closeDialog={() => setShowDialog("")}
                />
            </Modal>
        </div>
    );
}

export default HomePage;