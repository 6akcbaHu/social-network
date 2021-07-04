import React from 'react';
import s from './Profile.module.css';
import MyPost from '../myPost/MyPost';

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.profile}>
                <div className={s.profile__logo}>
                    <img src="https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg" alt=""/>
                </div>
                <div className="profile__description">
                    <div className="pd__name">Dima D</div>
                    <div className="pd__birthday">15.12.89</div>
                    <div className="pd__city">Moscow</div>
                    <div className="pd__education">BGTU'16</div>
                    <div className="pd__site">www.ssssss.com</div>
                </div>
            </div>
            <MyPost/>
        </div>
    );

}
export default Profile;