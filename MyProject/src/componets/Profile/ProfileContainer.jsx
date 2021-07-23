import React from 'react';
import s from "../Profile/Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostContainer from "./MyPost/MyPostContainer";
import FriendsProfileContainer from "./FriendsProfile/FriendsProfileoContainer";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, setUserProfileThunkCreator} from "../../redux/reducerProfile";
import {withRouter} from "react-router-dom";
import {getProfileUsers} from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount = () => {
        let userId=this.props.match.params.userId;
        if(!userId){
            userId=2
        }
        debugger
       this.props.setUserProfileThunkCreator(userId)

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
let WithDataContainerComponent=withRouter(ProfileContainer)
export default connect(mapStateToProps,{setUserProfileThunkCreator})(WithDataContainerComponent);