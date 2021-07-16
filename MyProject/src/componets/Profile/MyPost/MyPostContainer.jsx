import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/reducerProfile"
import MyPost from "./MyPost";


const MyPostContainer = (props) => {
    let state = props.store.getState()
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action);
    }
    return (<MyPost updateNewPostText={onPostChange} addPost={addPost} post={props.posts}
                    posts={state.profilesPage.posts}
                    newPostText={state.profilesPage.newPostText}/>
    )
}

export default MyPostContainer;