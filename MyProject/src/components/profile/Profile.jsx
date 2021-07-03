import React from 'react';
import s from './Profile.module.css';
import MyPost from '../myPost/MyPost';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg" alt=""/>
            </div>
            <div>AvaDicriptions</div>
            <MyPost/>
        </div>
    );

}
export default Profile;