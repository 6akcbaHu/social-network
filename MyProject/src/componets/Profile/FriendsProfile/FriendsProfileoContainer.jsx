import React from 'react';
import FriendsItem from "./FriendsItem/FriendsItem";
import FriendsProfile from "./FriendsProfile";


const FriendsProfileContainer = (props) => {
    let state=props.store.getState()

    return (
        <FriendsProfile friendsList={state.friendsPage.friendsList}/>
        )
}

export default FriendsProfileContainer;