import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    followeAC,
    seCurrentPageAC,
    setCurrentPageAC,
    setNewPageAC,
    setUsersAC,
    unfolloweAC
} from "../../redux/reducerUser";


let mapStateToProps = (state) => {
    window.state=state.usersPage;
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage

    }

}


let mapDispatchToProps = (dispatch) => {

    return {
        follow: (userId) => {
            dispatch(followeAC(userId))

        },

        unfollow: (userId) => {
            dispatch(unfolloweAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (users,currentPage) => {
            dispatch(setCurrentPageAC(users,currentPage))

        }

    }

}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;