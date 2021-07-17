import state, {subscribe} from "./redux/store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {addPost, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redaxStore";
import StoreContext from "./StoreContext";


export let rerenderEntireThree = (state) => {

    ReactDOM.render(
        <React.StrictMode>

            <BrowserRouter>
                <StoreContext.Provider value={store}>
                <App store={store}/>
                </StoreContext.Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireThree(store.getState())


store.subscribe(()=>{
    let state=store.getState();
    rerenderEntireThree(state);
});

