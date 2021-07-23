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


// let mapDispatchToProps = (dispatch) => {
//
//     return {
//         follow: (userId) => {
//             dispatch(followeAC(userId))
//
//         },
//
//         unfollow: (userId) => {
//             dispatch(unfolloweAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (users, currentPage) => {
//             dispatch(setCurrentPageAC(users, currentPage))
//
//         },
//         togglesIsFetching:(isFetching)=>{
//             dispatch(toggleIsFatchingAC(isFetching))
//         }
//
//
//     }
//
// }
export default connect(mapStateToProps,
    {
        followThunkCreator, unfollowThunkCreator, setCurrentPage,
        toggleIsFatching, toggleFollowInProgress, getUsersThunkCreator, nextPageThunkCreator
    })(UsersСontainer)
