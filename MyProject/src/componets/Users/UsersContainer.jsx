import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    followThunkCreator, getUsersThunkCreator, nextPageThunkCreator,
    setCurrentPage,
    toggleFollowInProgress, toggleIsFatching,
    unfollowThunkCreator
} from "../../redux/reducerUser";

import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersСontainer extends React.Component {

    componentDidMount = () => {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)

    }

    nextPage = () => {
        this.props.nextPageThunkCreator(this.props.currentPage, this.props.pageSize)

    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users users={this.props.users}
                       unfollowThunkCreator={this.props.unfollowThunkCreator}
                       followThunkCreator={this.props.followThunkCreator}
                       nextPage={this.nextPage}
                       isFetching={this.props.isFetching}
                       followInProgerss={this.props.followInProgerss}

                />
            </>


        )
    }

}

let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followInProgerss: state.usersPage.followInProgerss

    }

}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps,
        {
            followThunkCreator, unfollowThunkCreator, setCurrentPage,
            toggleIsFatching, toggleFollowInProgress, getUsersThunkCreator, nextPageThunkCreator
        })
)(UsersСontainer)
