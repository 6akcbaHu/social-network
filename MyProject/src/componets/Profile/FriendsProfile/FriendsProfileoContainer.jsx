import React from 'react';
import FriendsProfile from "./FriendsProfile";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
  return {
      friendsList:state.friendsPage.friendsList
  }
}

const FriendsProfileContainer=connect(mapStateToProps)(FriendsProfile)
export default FriendsProfileContainer;