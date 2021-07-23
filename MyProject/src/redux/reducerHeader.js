import {getHeaderLogin, getProfileUsers} from "../api/api";
import {setUserProfile} from "./reducerProfile";
import {setAuthMeData} from "./reducerAuth";


export const getHeaderLoginThunkCreator = (userId) => {
    return (dispatch) => {

        getHeaderLogin().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthMeData(id, login, email))

            }


        })

    }
}
