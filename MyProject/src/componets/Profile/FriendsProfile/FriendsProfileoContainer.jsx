import React from 'react';
import FriendsProfile from "./FriendsProfile";
import {connect} from "react-redux";
import {stateSelector} from "../../selectors/usersSelectors";

let mapStateToProps=(state)=>{
  return {
      friendsList:stateSelector(state)
  }
}

const FriendsProfileContainer=connect(mapStateToProps)(FriendsProfile)
export default FriendsProfileContainer;