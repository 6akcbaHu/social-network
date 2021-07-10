import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post'

const MyPost = (props) => {

    let postsData = props.posts.map(el => <Post message={el.message} like={el.likeCount}/>)


    return (
        <div className={s.page}>
            <div className={s.page__post}>MyPost</div>
            <div className={s.page__area}>
                <div className={s.page__area__text}>
                    <textarea></textarea>
                </div>
                <div className={s.page__area__button}>
                    <button>add post</button>
                </div>
            </div>
            {postsData}
        </div>


    )
}

export default MyPost;