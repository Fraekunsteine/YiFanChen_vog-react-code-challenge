import React, { useEffect, useState } from 'react';
import css from './home.module.css';
import homeActions from '../actions/homeApi';
import Modal from 'react-modal';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ModalDialog from './modal';
import SearchBar from './SearchBar';

function HomePage(props) {
    const posts = useSelector(state => state.homeReducer);
    const dispatch = useDispatch();
    const [showDialog, setShowDialog] = useState("");
    const search = (param) => {
        posts.find(post => post.id === parseInt(param));
    }
  
    useEffect(() => {
        Modal.setAppElement("#root");

        axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
          //console.log(response);
          dispatch(homeActions.getAllPosts(response.data));
        }).catch(error => {
          console.log(error);
        });       
    }, [])
    return(
        <div className={css.HomeMain}>
            <div className={css.Display}>
                {posts.map((post) => (
                    <div className={css.Post}>
                        <h3>{post.title} - ID: {post.id}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
            <div className={css.Controls}>
                <button onClick={() => setShowDialog("Add")}>Add</button>
                <button onClick={() => setShowDialog("Edit")}>Edit</button>
                <button onClick={() => setShowDialog("Delete")}>Delete</button>
                <SearchBar search={search}></SearchBar>
            </div>
            <Modal
                isOpen={showDialog !== ""}
                onRequestClose={() => setShowDialog("")}
                contentLabel="Modal Dialog"               
            >
                <ModalDialog mode={showDialog}/>
            </Modal>
        </div>
        

    );
}

export default HomePage;