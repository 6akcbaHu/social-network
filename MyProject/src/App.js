import './style/App.css';
import React from 'react';
import Header from "./componets/Header/header";
import Profile from "./componets/Profile/Profile";
import Footer from "./componets/Footer/Footer";
import {Route} from "react-router-dom";
import DialogContainer from "./componets/Dialog/DialogСontainer";
import NavBarContainer from "./componets/NavBar/NavBarContainer";
import FriendsContainer from "./componets/Friends/FriendsContainer";

function App(props) {

    return (

            <div className="wrapper">
                <Header/>
                <div className="content">

                    <div className="content__item">
                        <NavBarContainer store={props.store}/>
                        <Route path='/profile' render={() => <Profile store={props.store}/>}/>
                        <Route path='/dialogs' render={() => <DialogContainer store={props.store}/>}/>
                        <Route path='/friends' render={() => <FriendsContainer store={props.store}/>}/>
                    </div>


                </div>
                <Footer/>
            </div>


    );
}

export default App;
