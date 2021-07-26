import {
    getFollowUsers,
    getFollowUsersAPI,
    getUnFollowUsers,
    getUnFollowUsersAPI,
    getUsers,
    getUsersAPI, usersAPI
} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FATCHING = 'TOGGLE_IS_FATCHING';
const TOGGLE_FOLLOW_IN_PROGRESS = 'TOGGLE_FOLLOW_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followInProgerss: []


}

const reducerUser = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users: [...action.users]}

        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                users: [...state.users, ...action.users],
                currentPage: action.page

            }

        }
        case TOGGLE_IS_FATCHING: {
            return {...state, isFetching: action.isFetching}

        }
        case TOGGLE_FOLLOW_IN_PROGRESS: {
            return {
                ...state,
                followInProgerss: action.isFetching
                    ? [...state.followInProgerss, action.userId]
                    : state.followInProgerss.filter(id => id != action.userId)

            }
        }
        default:
            return state;
    }

}
export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (users, page) => ({type: SET_CURRENT_PAGE, users, page})
export const toggleIsFatching = (isFetching) => ({type: TOGGLE_IS_FATCHING, isFetching})
export const toggleFollowInProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOW_IN_PROGRESS, isFetching, userId})

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFatching(true));
        usersAPI.getUsersAPI(currentPage, pageSize).then(data => {
            dispatch(toggleIsFatching(false));
            dispatch(setUsers(data.items));
        })
    }
}
export const nextPageThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFatching(true));
        usersAPI.getUsersAPI(currentPage + 1, pageSize).then(data => {
            dispatch(toggleIsFatching(false));
            dispatch(setCurrentPage(data.items, currentPage + 1))

        })

    }
}
export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowInProgress(true, userId))
        usersAPI.getFollowUsersAPI(userId).then(data => {

            if (data.resultCode == 0) {
                dispatch(follow(userId))
            }
            dispatch(toggleFollowInProgress(false, userId))
        })
    }
}
export const unfollowThunkCreator = (userId) => {
    return (dispatch) => {

        dispatch(toggleFollowInProgress(true, userId))
        usersAPI.getUnFollowUsersAPI(userId).then(data => {
            if (data.resultCode == 0) {
                dispatch(unfollow(userId))
            }
            dispatch(toggleFollowInProgress(false, userId))
        })
    }
}
export default reducerUser;