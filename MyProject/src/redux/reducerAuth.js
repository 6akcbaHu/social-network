import {authMe} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'SET_AUTH_DATA';
const GET_CAPTCHA_URL = ' GET_CAPTCHA_URL';
let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null

}

const reducerAuth = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
        case GET_CAPTCHA_URL:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
}

export const setAuthMeData = (id, login, email, isAuth) => ({type: SET_AUTH_DATA, data: {id, login, email, isAuth}})
export const getCaptchaURL = (captchaUrl) => ({type: GET_CAPTCHA_URL, data: {captchaUrl}})
export const getAuthMeData = (userId) => {
    return async (dispatch) => {
        let response = await authMe.Me();
        if (response.resultCode === 0) {
            let {id, login, email} = response.data;
            dispatch(setAuthMeData(id, login, email, true));
        }
    }


}


export const login = (email, password, rememberMe,captcha) => {
    return async (dispatch) => {
        let response = await authMe.loginMe(email, password, rememberMe,captcha);

        if (response.resultCode === 0) {
            dispatch(getAuthMeData());

        } else {
            if (response.resultCode === 10) {
                dispatch(captchaUrl())
            }
            // let message = data.messages.length > 0 ? data.messages[0] : 'some error'
            dispatch(stopSubmit('login', {_error: response.messages[0]}));
        }
    }
}
export const logout = () => {
    return async (dispatch) => {
        let response = await authMe.logoutMe();

        if (response.resultCode === 0) {
            dispatch(setAuthMeData(null, null, null, false));
        }
    }

}
export const captchaUrl = () => {
    return async (dispatch) => {
        const response = await authMe.Captcha();
        const captcha = response.url;
        dispatch(getCaptchaURL(captcha))

    }

}

export default reducerAuth;