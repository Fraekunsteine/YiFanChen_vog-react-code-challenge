import css from './modal.module.css';

function ModalDialog(props) {
    const addPost = (
        <div className={css.Content}>

        </div>
    );
    return (
        
        <div>
            <h1>{props.mode} Posts</h1>

        </div>
    );
}

export default ModalDialog;