import {applyMiddleware, combineReducers, createStore} from "redux";
import reducerProfile from "./reducerProfile";
import reducerDialog from "./reducerDialog";
import reducerNav from "./reducerNav";
import reducerFriends from "./reducerFriends";
import reducerUser from "./reducerUser";
import reducerAuth from "./reducerAuth";
import thunkMiddleware from  "redux-thunk";
let reducer = combineReducers({
        profilesPage: reducerProfile,
        dialogsPage: reducerDialog,
        navPage: reducerNav,
        friendsPage: reducerFriends,
        usersPage:reducerUser,
        auth:reducerAuth
    }
);

let store = createStore(reducer,applyMiddleware(thunkMiddleware));

export default store;