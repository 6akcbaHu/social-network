import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    console.log(props)
    return (

        <div>
            <div className={s.item}>
                <img src="https://www.meme-arsenal.com/memes/6b18553dd22b9010f674e72f5b38698e.jpg" alt=""/>
                {props.message}
                <div>
                    <span>like{props.like}</span>
                </div>
            </div>

        </div>

    );
}
export default Post;