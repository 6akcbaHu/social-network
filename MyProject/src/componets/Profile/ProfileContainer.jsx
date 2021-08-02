import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator, saveProfilePhotoThunkCreator,
    updateUserStatusThunkCreator
} from "../../redux/reducerProfile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {isAuthIfSelector, isAuthSelector} from "../selectors/authSelectors";
import {profileSelector, statusSelector} from "../selectors/profileSelectors";

class ProfileContainer extends React.Component {
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return nextProps != this.props || nextState != this.state
    // }

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            // debugger
            userId = this.props.userId
            if (!userId) this.props.history.push('/login')
        }

        this.props.getUserProfileThunkCreator(userId)
        this.props.getUserStatusThunkCreator(userId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.match.params.userId != prevProps.match.params.userId) {
            // debugger
            let userId = this.props.match.params.userId;
            if (!userId) {
                // debugger
                userId = this.props.userId
                if (!userId) this.props.history.push('/login')
            }

            this.props.getUserProfileThunkCreator(userId)
            this.props.getUserStatusThunkCreator(userId)
        }

    }

    render() {

        return <Profile {...this.props}
                        isOwner={!this.props.match.params.userId}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateUserStatusThunkCreator}
                        saveProfilePhotoThunkCreator={this.props.saveProfilePhotoThunkCreator}
        />

    }
}


let mapStateToProps = (state) => {

    return {
        profile: profileSelector(state),
        status: statusSelector(state),
        userId: isAuthIfSelector(state),
        isAuth: isAuthSelector(state)
    }

}

export default compose(connect(mapStateToProps,
    {
        getUserProfileThunkCreator,
        getUserStatusThunkCreator,
        updateUserStatusThunkCreator,
        saveProfilePhotoThunkCreator
    }), withRouter, withAuthRedirect)(ProfileContainer)