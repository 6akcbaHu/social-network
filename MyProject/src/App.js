import './App.css';
import React from 'react';
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar.jsx";
import Profile from "./components/profile/Profile.jsx";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";


function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <div className="wrapper-container">
                    <NavBar/>
                    <div className='app-wrapper-content'>

                        <Route path='/dialogs' component={Dialogs}/>
                        <Route path='/profile' component={Profile}/>
                    </div>
                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
