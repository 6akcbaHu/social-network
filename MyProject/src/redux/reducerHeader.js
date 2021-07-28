import {authMe, getHeaderLogin, getHeaderLoginAPI, getProfileUsers} from "../api/api";
import {setUserProfile} from "./reducerProfile";
import {setAuthMeData} from "./reducerAuth";


// export const getHeaderLoginThunkCreator = (userId) => {
//     return (dispatch) => {
//
//         authMe.getHeaderLoginAPI().then(data => {
//             if (data.resultCode === 0) {
//                 let {id, login, email} = data.data
//                 dispatch(setAuthMeData(id, login, email))
//
//             }
//
//
//         })
//
//     }
// }
// export const login = (email,password,rememberMe) => {
//     return (dispatch) => {
//
//         authMe.loginMe(email,password,rememberMe).then(data => {
//             if (data.resultCode === 0) {
//
//                 dispatch(getHeaderLoginThunkCreator())
//
//             }
//
//
//         })
//
//     }
// }
// export const logout = (email,password,rememberMe) => {
//     return (dispatch) => {
//
//         authMe.logoutMe().then(data => {
//             if (data.resultCode === 0) {
//
//                 dispatch(getHeaderLoginThunkCreator())
//
//             }
//
//
//         })
//
//     }
// }
