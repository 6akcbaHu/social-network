import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post'

const MyPost = (props) => {

    let postsData = props.posts.map(el => <Post message={el.message} like={el.likeCount}/>)

    let newPostElement=React.createRef();
    let addPost=()=>{
        let text =newPostElement.current.value;
        alert(text)
    }

    return (
        <div className={s.page}>
            {/*<div className={s.page__post}>MyPost</div>*/}
            <div className={s.page__area}>
                <div className={s.page__area__text}>
                    <textarea ref={newPostElement}></textarea>
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