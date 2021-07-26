import React from 'react';
import s from "../Profile/Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostContainer from "./MyPost/MyPostContainer";
import FriendsProfileContainer from "./FriendsProfile/FriendsProfileoContainer";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    setUserProfile,
    setUserProfileThunkCreator, updateUserStatusThunkCreator
} from "../../redux/reducerProfile";
import {Redirect, withRouter} from "react-router-dom";
import {getProfileUsers} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }

        this.props.getUserProfileThunkCreator(userId)
        this.props.getUserStatusThunkCreator(userId)
    }

    render() {

        return <Profile {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateUserStatusThunkCreator}/>

    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilesPage.profile,
        status: state.profilesPage.status
    }

}

export default compose(connect(mapStateToProps,
    {
        getUserProfileThunkCreator,
        getUserStatusThunkCreator,
        updateUserStatusThunkCreator
    }), withRouter, withAuthRedirect)(ProfileContainer)