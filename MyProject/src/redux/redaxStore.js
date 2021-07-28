import {applyMiddleware, combineReducers, createStore} from "redux";
import reducerProfile from "./reducerProfile";
import reducerDialog from "./reducerDialog";
import reducerNav from "./reducerNav";
import reducerFriends from "./reducerFriends";
import reducerUser from "./reducerUser";
import reducerAuth from "./reducerAuth";
import thunkMiddleware from  "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import reducerApp from "./reducerApp";
let reducers = combineReducers({
        profilesPage: reducerProfile,
        dialogsPage: reducerDialog,
        navPage: reducerNav,
        friendsPage: reducerFriends,
        usersPage:reducerUser,
        auth:reducerAuth,
        form:formReducer,
        app:reducerApp
    }
);


let store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store=store
export default store;