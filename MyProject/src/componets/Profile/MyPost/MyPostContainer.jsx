import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/reducerProfile"
import MyPost from "./MyPost";
import StoreContext from "../../../StoreContext";


const MyPostContainer = (props) => {
    let state = props.store.getState()
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action);
    }
    return (
        <StoreContext.Consumer>{
            (store)=>
            <MyPost updateNewPostText={onPostChange} addPost={addPost} post={props.posts}
                    posts={state.profilesPage.posts}
                    newPostText={state.profilesPage.newPostText}/>
        }
        </StoreContext.Consumer>
    )
}

export default MyPostContainer;