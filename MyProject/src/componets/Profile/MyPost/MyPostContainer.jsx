import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/reducerProfile"
import MyPost from "./MyPost";
import {connect} from "react-redux";
// import StoreContext from "../../../StoreContext";


// const MyPostContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState()
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 }
//                 let onPostChange = (text) => {
//                     let action = updateNewPostTextActionCreator(text)
//                     store.dispatch(action);
//                 }
//                 return <MyPost updateNewPostText={onPostChange} addPost={addPost} post={props.posts}
//                                posts={state.profilesPage.posts}
//                                newPostText={state.profilesPage.newPostText}/>
//             }}
//         </StoreContext.Consumer>
//     )
// }
let mapStateToProps=(state)=>{
    return  {
        posts:state.profilesPage.posts,
        newPostText:state.profilesPage.newPostText
    }
}
let  mapDispatchToProps=(dispatch)=>{
    return {
        updateNewPostText:(text)=>{
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost:(text)=>{
            dispatch(addPostActionCreator());
        }
    }
}
const MyPostContainer=connect(mapStateToProps,mapDispatchToProps)(MyPost);
export default MyPostContainer;