import React from 'react';
import s from './Post.module.css';
import LogoLike from '../../../../images/Post/like.png';

const Post = (props) => {

    return (
        <div className={s.page}>
            <div className={s.page__ava}>
                <img src="https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg" alt=""/>
            </div>
            <div className={s.page__area}>
                <div className={s.page__area__text}>{props.message}
                </div>
                <div className={s.page__area__like}><img src={LogoLike} alt=""/>{props.like}</div>

            </div>

        </div>
    )
}

export default Post;