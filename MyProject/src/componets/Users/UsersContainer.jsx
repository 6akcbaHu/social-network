import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followeAC, setUsersAC, unfolloweAC} from "../../redux/reducerUser";

let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {

    return{
        follow:(userId)=>{
            dispatch(followeAC(userId))
            debugger
        },

        unfollow:(userId)=>{
            dispatch(unfolloweAC(userId))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        },

    }

}
const UsersContainer=connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;