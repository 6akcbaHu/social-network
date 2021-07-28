import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
     updateUserStatusThunkCreator
} from "../../redux/reducerProfile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            // debugger
            userId = this.props.userId
            // if(!userId) this.props.history.push('/login')
        }
debugger
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
        status: state.profilesPage.status,
        userId:state.auth.id,
        isAuth:state.auth.isAuth
    }

}

export default compose(connect(mapStateToProps,
    {
        getUserProfileThunkCreator,
        getUserStatusThunkCreator,
        updateUserStatusThunkCreator
    }), withRouter, withAuthRedirect)(ProfileContainer)