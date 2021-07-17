import React from 'react';
import s from "../Profile/Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostContainer from "./MyPost/MyPostContainer";
import FriendsProfileContainer from "./FriendsProfile/FriendsProfileoContainer";

const Profile = (props) => {

    return (
        <div className={s.page}>
            <ProfileInfo/>
            <div className={s.profile__friendsPost}>
                <FriendsProfileContainer store={props.store}/>
                <MyPostContainer store={props.store}/>
            </div>
        </div>

    )
}

export default Profile;