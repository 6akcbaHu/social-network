import React from 'react';
import s from "../Profile/Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostContainer from "./MyPost/MyPostContainer";
import FriendsProfileContainer from "./FriendsProfile/FriendsProfileoContainer";
import {Redirect} from "react-router-dom";
import {saveProfile} from "../../redux/reducerProfile";

const Profile = (props) => {


    return (

        <div className={s.page}>
            <ProfileInfo isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         saveProfilePhotoThunkCreator={props.saveProfilePhotoThunkCreator}
                         saveProfile={props.saveProfile}
            />
            <div className={s.profile__friendsPost}>
                <FriendsProfileContainer/>
                <MyPostContainer/>
            </div>
        </div>

    )
}

export default Profile;