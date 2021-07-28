import {authMe} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'SET_AUTH_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,

}

const reducerAuth = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
}

export const setAuthMeData = (id, login, email, isAuth) => ({type: SET_AUTH_DATA, data: {id, login, email, isAuth}})
export const getAuthMeData = (userId) => {
    return (dispatch) => {
      return   authMe.Me().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthMeData(id, login, email, true))
            }
        })

    }

}
export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authMe.loginMe(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthMeData())
            } else {

                // let message = data.messages.length > 0 ? data.messages[0] : 'some error'
                dispatch(stopSubmit('login', {_error: data.messages[0]}))
            }
        })
    }
}
export const logout = () => {
    return (dispatch) => {
        authMe.logoutMe().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthMeData(null, null, null, false))
            }
        })

    }
}
export default reducerAuth;