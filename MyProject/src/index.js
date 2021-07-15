import state, {subscribe} from "./redux/store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {addPost, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redaxStore";


export let rerenderEntireThree = (state) => {

    ReactDOM.render(
        <React.StrictMode>

            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)}/>
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

