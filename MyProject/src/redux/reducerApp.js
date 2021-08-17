import {authMe} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthMeData} from "./reducerAuth";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
}

const reducerApp = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})
export const initializeApp = () => {

    return (dispatch) => {
        let promise = dispatch(getAuthMeData());

        Promise.all([promise]).then(() => {
            dispatch(initializedSuccess())
        })

    }
}
export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await authMe.loginMe(email, password, rememberMe)
        if (response.resultCode === 0) {
            dispatch(getAuthMeData())
        } else {
            dispatch(stopSubmit('login', {_error: response.messages[0]}))
        }
    }
}

export default reducerApp;