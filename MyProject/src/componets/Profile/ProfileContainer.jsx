import React from 'react';
import s from "../Profile/Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostContainer from "./MyPost/MyPostContainer";
import FriendsProfileContainer from "./FriendsProfile/FriendsProfileoContainer";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/reducerProfile";

class ProfileContainer extends React.Component {
    componentDidMount = () => {
        // this.props.toggleIsFatching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            // this.props.toggleIsFatching(false);

            this.props.setUserProfile(response.data)


        })

    }

    render() {

        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilesPage.profile

    }

}


export default connect(mapStateToProps,{setUserProfile})(ProfileContainer);