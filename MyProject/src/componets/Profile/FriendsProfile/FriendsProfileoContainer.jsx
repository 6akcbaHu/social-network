import React from 'react';
import FriendsProfile from "./FriendsProfile";
// import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";

//
// const FriendsProfileContainer = (props) => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState()
//                 return <FriendsProfile friendsList={state.friendsPage.friendsList}/>
//             }}
//         </StoreContext.Consumer>
//
//     )
// }
let mapStateToProps=(state)=>{
  return {
      friendsList:state.friendsPage.friendsList
  }
}

const FriendsProfileContainer=connect(mapStateToProps)(FriendsProfile)
export default FriendsProfileContainer;