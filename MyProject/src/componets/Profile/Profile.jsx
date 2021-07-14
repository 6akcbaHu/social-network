import React from 'react';
import s from "../Profile/Profile.module.css";
import FriendsProfile from "./FriendsProfile/FriendsProfile";
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile = (props) => {
debugger
    return (
        <div className={s.page}>
            <ProfileInfo/>
            <div className={s.profile__friendsPost}>
                <FriendsProfile/>
                <MyPost posts={props.profilesPage.posts}
                        newPostText={props.profilesPage.newPostText}
                        dispatch={props.dispatch}/>
            </div>
        </div>

    )
}

export default Profile;