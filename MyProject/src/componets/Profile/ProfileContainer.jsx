import React from 'react';
import s from "../Profile/Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostContainer from "./MyPost/MyPostContainer";
import FriendsProfileContainer from "./FriendsProfile/FriendsProfileoContainer";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/reducerProfile";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount = () => {

        let userId=this.props.match.params.userId;
        if(!userId){
            userId=2
        }
        // this.props.toggleIsFatching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then(response => {
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
let WithDataContainerComponent=withRouter(ProfileContainer)
export default connect(mapStateToProps,{setUserProfile})(WithDataContainerComponent);