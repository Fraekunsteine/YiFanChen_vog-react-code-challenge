import { Button, OutlinedInput } from '@material-ui/core';
import { useState } from 'react';
import css from './modal.module.css';

function ModalDialog(props) {
    const [idInput, setIdInput] = useState("");
    const [titleInput, setTitleInput] = useState("");
    const [bodyInput, setBodyInput] = useState("");
    const updateId = (e) => {
        setIdInput(e.target.value);
    }
    const updateTitle = (e) => {
        setTitleInput(e.target.value);
    }
    const updateBody = (e) => {
        setBodyInput(e.target.value);
    }
    const addPost = (
        <div className={css.Content}>
            <h3>Title</h3>
            <OutlinedInput
                placeholder={"Enter post title..."}
                type="text"
                variant="outlined"
                value={titleInput}
                onChange={updateTitle}
            />
            <h3>Body</h3>
            <OutlinedInput
                placeholder={"Enter post body..."}
                type="text"
                multiline
                rows={8}
                variant="outlined"
                value={bodyInput}
                onChange={updateBody}
            />
            <Button variant='contained' color='primary' onClick={() => {
                props.addPost(titleInput, bodyInput, 7);
                props.closeDialog();
            }}>
                Add
            </Button>
        </div>
    );
    const editPost = (
        <div className={css.Content}>
            <h3>Post ID</h3>
            <OutlinedInput
                placeholder={"Enter id of post to edit..."}
                type="text"
                variant="outlined"
                value={idInput}
                onChange={updateId}
            />
            <h3>Title</h3>
            <OutlinedInput
                placeholder={"Enter post title..."}
                type="text"
                variant="outlined"
                value={titleInput}
                onChange={updateTitle}
            />
            <h3>Body</h3>
            <OutlinedInput
                placeholder={"Enter post body..."}
                type="text"
                multiline
                rows={8}
                variant="outlined"
                value={bodyInput}
                onChange={updateBody}
            />
            <Button variant='contained' onClick={() => { 
                props.editPost(parseInt(idInput), titleInput, bodyInput, 7);
                props.closeDialog();
            }}>
                Edit
            </Button>
        </div>
    );
    const deletePost = (
        <div className={css.Content}>
            <h3>Post ID</h3>
            <OutlinedInput
                placeholder={"Enter id of post to delete..."}
                type="text"
                variant="outlined"
                value={idInput}
                onChange={updateId}
            />
            <Button variant='contained' color='secondary' onClick={() => {
                props.deletePost(parseInt(idInput));
                props.closeDialog();
            }}
                >Delete
            </Button>
        </div>
    );
    return (      
        <div>
            <h1>{props.mode} Post</h1>
            {props.mode === "Add" ? addPost : props.mode === "Edit" ? editPost : deletePost}

        </div>
    );
}

export default ModalDialog;