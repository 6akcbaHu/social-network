import React, {useState} from 'react';
import s from './Post.module.css';
// import LogoLike from '../../../../images/Post/like.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faHeart
} from "@fortawesome/free-solid-svg-icons";

const Post = (props) => {
    const [count, setCount] = useState(props.like);
    return (
        <div className={s.page}>
            <div className={s.page__ava}>
                <img src="https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg" alt=""/>
            </div>
            <div className={s.page__area}>
                <div className={s.page__area__text}>{props.message}
                </div>
                <div className={s.page__area__like}><p onClick={() => setCount(count + 1)}>
                    {<FontAwesomeIcon icon={faHeart}/>}</p><span>{count}</span>
                </div>

            </div>

        </div>
    )
}

export default Post;