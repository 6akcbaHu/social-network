import state, {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {addPost, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";


export let rerenderEntireThree = (state) => {
    debugger
    ReactDOM.render(
        <React.StrictMode>

            <BrowserRouter>
                <App state={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireThree(store.getState())


store.subscribe(rerenderEntireThree);

