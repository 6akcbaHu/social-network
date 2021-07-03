import React from 'react';
import s from './myPost.module.css';
import Post from "./Post";


const MyPost = () => {
    return (<>

            <div>My post</div>
            <div>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <div className={s.post}>
                <Post message='Hi, how are you?' like='70'/>
                <Post message="It's my firs post" like='34'/>
            </div>
        </>
    );
}
export default MyPost;