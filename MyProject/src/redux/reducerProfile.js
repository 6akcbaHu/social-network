import {getProfileUsers, getProfileUsersAPI, getUsers, profileAPI, usersAPI} from "../api/api";
import {setUsers, toggleIsFatching} from "./reducerUser";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
let initialState = {
    posts: [
        {id: 1, message: 'Hi', likeCount: 73},
        {id: 2, message: 'Hello', likeCount: 11},
        {id: 3, message: 'kyky', likeCount: 21},
        {id: 4, message: 'kykysssss', likeCount: 366},
        {id: 5, message: 'kykysssss', likeCount: 366}
    ],
    newPostText: 'бычок',
    profile: null,
    status:''
}

const reducerProfile = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: state.posts.length + 1, message: state.newPostText, likeCount: 0}]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfileThunkCreator = (userId) => {
    return (dispatch) => {

        usersAPI.getProfileUsersAPI(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })

    }
}
export const setUserStatus=(status)=>({type:SET_USER_STATUS,status})
export const getUserStatusThunkCreator=(status)=>{
    return(dispatch)=>{
        profileAPI.getStatus(status).then(response => {
            dispatch(setUserStatus(response.data))
        })
    }
}
export const updateUserStatusThunkCreator=(status)=> {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if(response.data.resultCode===0) {
                dispatch(setUserStatus(status))
            }
        })
    }
}
export default reducerProfile;