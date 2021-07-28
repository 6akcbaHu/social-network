import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/reducerProfile"
import MyPost from "./MyPost";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
    return  {
        posts:state.profilesPage.posts,
        newPostText:state.profilesPage.newPostText
    }
}
let  mapDispatchToProps=(dispatch)=>{

    return {

        addPost:(newMyPost)=>{
            dispatch(addPostActionCreator(newMyPost));
        }
    }
}
const MyPostContainer=connect(mapStateToProps,mapDispatchToProps)(MyPost);
export default MyPostContainer;