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
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthMeData = (id, login, email) => ({type: SET_AUTH_DATA, data: {id, login, email}})

export default reducerAuth;