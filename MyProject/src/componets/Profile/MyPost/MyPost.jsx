import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";




const MyPost = (props) => {
console.log(props)
    let postsData = props.posts.map(el => <Post message={el.message} like={el.likeCount}/>)

    let newPostElement = React.createRef();
    let addPost = () => {
        // let text = newPostElement.current.value;

        props.dispatch(addPostActionCreator());
        // props.updatePostText('');
    }
    let onPostChange = () => {

        let text = newPostElement.current.value;

        let action=updateNewPostTextActionCreator(text)
        props.dispatch(action);
    }
    debugger
    return (
        <div className={s.page}>
            {/*<div className={s.page__post}>MyPost</div>*/}
            <div className={s.page__area}>
                <div className={s.page__area__text}>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                </div>
                <div className={s.page__area__button}>
                    <button onClick={addPost}>send</button>
                </div>
            </div>
            {postsData}
        </div>


    )
}

export default MyPost;