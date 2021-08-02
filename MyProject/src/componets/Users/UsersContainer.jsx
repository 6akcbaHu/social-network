import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    followThunkCreator, getUserProfileThunkCreator2, getUsersThunkCreator, nextPageThunkCreator, removeFriends,
    setCurrentPage,
    toggleFollowInProgress, toggleIsFatching,
    unfollowThunkCreator
} from "../../redux/reducerUser";

import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    currentPageSelectors, followInProgerssSelectors,
    isFetchingSelectors,
    pageSizeSelectors, stateSelector,
    totalUsersCountSelectors, usersSelectors
} from "../selectors/usersSelectors";

// import {getUserProfileThunkCreator, getUserProfileThunkCreator2} from "../../redux/reducerProfile";


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
                       getUserProfileThunkCreator2={this.props.getUserProfileThunkCreator2}
                       friendsList={this.props.friendsList}
                       removefriends={this.props.removeFriends}
                />
            </>


        )
    }

}

let mapStateToProps = (state) => {

    return {
        users: usersSelectors(state),
        pageSize: pageSizeSelectors(state),
        totalUsersCount: totalUsersCountSelectors(state),
        currentPage: currentPageSelectors(state),
        isFetching: isFetchingSelectors(state),
        followInProgerss: followInProgerssSelectors(state),
        friendsList: stateSelector(state)

    }

}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps,
        {
            removeFriends,
            getUserProfileThunkCreator2,
            followThunkCreator, unfollowThunkCreator, setCurrentPage,
            toggleIsFatching, toggleFollowInProgress, getUsersThunkCreator, nextPageThunkCreator
        })
)(UsersСontainer)
