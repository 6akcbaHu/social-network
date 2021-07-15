import {combineReducers, createStore} from "redux";
import reducerProfile from "./reducerProfile";
import reducerDialog from "./reducerDialog";
import reducerNav from "./reducerNav";
import reducerFriends from "./reducerFriends";

let reducer = combineReducers({
        profilesPage: reducerProfile,
        dialogsPage: reducerDialog,
        navPage: reducerNav,
        friendsPage: reducerFriends
    }
);

let store = createStore(reducer);

export default store;