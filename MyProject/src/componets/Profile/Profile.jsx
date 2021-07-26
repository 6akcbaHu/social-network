import React from 'react';
import s from "../Profile/Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostContainer from "./MyPost/MyPostContainer";
import FriendsProfileContainer from "./FriendsProfile/FriendsProfileoContainer";
import {Redirect} from "react-router-dom";

const Profile = (props) => {


    return (

        <div className={s.page}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <div className={s.profile__friendsPost}>
                <FriendsProfileContainer/>
                <MyPostContainer/>
            </div>
        </div>

    )
}

export default Profile;