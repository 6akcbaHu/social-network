import {profileAPI, usersAPI} from "../api/api";
// import {addFriend} from "./reducerFriends";
// import {setUsers, toggleIsFatching} from "./reducerUser";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SAVE_PROFILE_PHOTO = 'SAVE_PROFILE_PHOTO';
let initialState = {
    posts: [
        {id: 1, message: 'Hi', likeCount: 73},
        {id: 2, message: 'Hello', likeCount: 11},
        {id: 3, message: 'kyky', likeCount: 21},
        {id: 4, message: 'kykysssss', likeCount: 366},
        {id: 5, message: 'kykysssss', likeCount: 366}
    ],
    profile: null,
    status: ''
}

const reducerProfile = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                // newPostText: action.newMyPost,
                posts: [...state.posts, {id: state.posts.length + 1, message: action.newMyPost, likeCount: 0}],

            }
        // case UPDATE_NEW_POST_TEXT:
        //     return {
        //         ...state,
        //         newPostText: action.newText
        //     }
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
        case SAVE_PROFILE_PHOTO:
            return {
                ...state, profile: {...state.profile, photos: action.foto}
            }
        default:
            return state;
    }

}

export const addPostActionCreator = (newMyPost) => ({type: ADD_POST, newMyPost})
// export const updateNewPostTextActionCreator = (text) =>
//     ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfileThunkCreator = (userId) => {
    return async (dispatch) => {
        let response = await usersAPI.getProfileUsersAPI(userId)
        dispatch(setUserProfile(response.data))


    }

}

export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})
export const getUserStatusThunkCreator = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(status)
        dispatch(setUserStatus(response.data))
    }
}

export const updateUserStatusThunkCreator = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    }
}
export const saveProfilePhoto = (foto) => ({type: SAVE_PROFILE_PHOTO, foto})
export const saveProfilePhotoThunkCreator = (file) => {
    return async (dispatch) => {
        let response = await profileAPI.savePhotos(file)
        if (response.data.resultCode === 0) {
            dispatch(saveProfilePhoto(response.data.data.photos))
        }
    }
}

export default reducerProfile;