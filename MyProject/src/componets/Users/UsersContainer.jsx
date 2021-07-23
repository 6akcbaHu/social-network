import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers, toggleIsFatching,
    unfollow
} from "../../redux/reducerUser";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";


class UsersСontainer extends React.Component {

    componentDidMount = () => {
        this.props.toggleIsFatching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true}).then(response => {
            this.props.toggleIsFatching(false);
            this.props.setUsers(response.data.items)


        })

    }

    nextPage = () => {
        this.props.toggleIsFatching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage + 1}&count=${this.props.pageSize}`, {withCredentials: true}).then(response => {
            this.props.toggleIsFatching(false);
            this.props.setCurrentPage(response.data.items, this.props.currentPage + 1)
        })

    }

    render() {

        return (
            <>
                {this.props.isFetching?<Preloader />:null}
                <Users users={this.props.users}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       nextPage={this.nextPage}
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
        isFetching:state.usersPage.isFetching

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
export default connect(mapStateToProps, {follow, unfollow,setUsers, setCurrentPage,toggleIsFatching})(UsersСontainer)
