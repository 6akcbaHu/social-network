import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post'
import {Field, reduxForm,reset} from "redux-form";
import {maxLengthCreator, required} from "../../common/Validators/validator";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPost = (props) => {
    let postsData = [...props.posts].reverse().map(el => <Post message={el.message} key={el.id} like={el.likeCount}/>)
    let addMyPost = (value) => {
        props.addPost(value.newMyPost)
    }
    return (
        <div className={s.page}>
            <AddPostRedaxForm onSubmit={addMyPost}/>
            {postsData}
        </div>
    )
}
const afterSubmit = (result, dispatch) =>
    dispatch(reset('AddMyPostForm'));

const AddMyPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={s.page__area}>
            <div className={s.item__text}>
                <Field component={Textarea} name={'newMyPost'} validate={[required]}></Field>
            </div>
            <div className={s.item__button}>
                <button>send</button>
            </div>
        </form>
    )
}
const AddPostRedaxForm=reduxForm({form:'AddMyPostForm',onSubmitSuccess: afterSubmit})(AddMyPostForm)
export default MyPost;