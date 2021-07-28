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
// debugger
    return (dispatch) => {
        let promise = dispatch(getAuthMeData());

        Promise.all([promise]).then(() => {
            dispatch(initializedSuccess())
        })

    }
}
export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authMe.loginMe(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthMeData())
            } else {
                dispatch(stopSubmit('login', {_error: data.messages[0]}))
            }
        })
    }
}
// export const logout = () => {
//     return (dispatch) => {
//         authMe.logoutMe().then(data => {
//             if (data.resultCode === 0) {
//                 dispatch(setAuthMeData(null, null, null, false))
//             }
//         })
//
//     }
// }
export default reducerApp;