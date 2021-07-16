import './style/App.css';
import React from 'react';
import Header from "./componets/Header/header";
import NavBar from "./componets/NavBar/NavBar";
import Profile from "./componets/Profile/Profile";
import Dialogs from "./componets/Dialog/Dialog";
import Friends from "./componets/Friends/Friends";
import Footer from "./componets/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom";
import store from "./redux/redaxStore";
import DialogContainer from "./componets/Dialog/DialogСontainer";


function App(props) {

    return (

            <div className="wrapper">
                <Header/>
                <div className="content">

                    <div className="content__item">
                        <NavBar state={props.state.navPage}/>
                        <Route path='/profile' render={() => <Profile store={props.store}/>}/>
                        <Route path='/dialogs' render={() => <DialogContainer store={props.store}/>}/>
                        <Route path='/friends' render={() => <Friends state={props.state.friendsPage}/>}/>
                    </div>


                </div>
                <Footer/>
            </div>


    );
}

export default App;
