const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE='SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING='TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize:10,
    totalUsersCount:0,
    currentPage:1,
    isFetching:true


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
        case SET_USERS:{
            return {...state,users:[...action.users]}

        }
        case SET_CURRENT_PAGE:{
            return {...state,
                users: [...state.users,...action.users],
                currentPage:action.page

            }

        }
        case TOGGLE_IS_FETCHING:{
            return {...state,isFetching:action.isFetching}

        }
        default:
            return state;
    }

}
export const followeAC = (userId) => ({type: FOLLOW, userId})
export const unfolloweAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC=(users,page)=>({type: SET_CURRENT_PAGE, users,page})
export const toggleIsFatchingAC=(isFetching)=>({type:TOGGLE_IS_FETCHING,isFetching})
export default reducerUser;