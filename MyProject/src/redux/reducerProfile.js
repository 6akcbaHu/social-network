const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi', likeCount: 73},
        {id: 2, message: 'Hello', likeCount: 11},
        {id: 3, message: 'kyky', likeCount: 21},
        {id: 4, message: 'kykysssss', likeCount: 366},
        {id: 5, message: 'kykysssss', likeCount: 366}
    ],
    newPostText: 'бычок',
    profile: null
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
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export default reducerProfile;