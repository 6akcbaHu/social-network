import './style/App.css';
import React from 'react';
import Header from "./componets/Header/header";
import Profile from "./componets/Profile/Profile";
import Footer from "./componets/Footer/Footer";
import {Route} from "react-router-dom";
import DialogContainer from "./componets/Dialog/DialogСontainer";
import NavBarContainer from "./componets/NavBar/NavBarContainer";
import FriendsContainer from "./componets/Friends/FriendsContainer";
import AllUsers from "./componets/Users/Users";
import UsersContainer from "./componets/Users/UsersContainer";

function App(props) {

    return (

            <div className="wrapper">
                <Header/>
                <div className="content">

                    <div className="content__item">
                        <NavBarContainer/>
                        <Route path='/profile' render={() => <Profile/>}/>
                        <Route path='/dialogs' render={() => <DialogContainer/>}/>
                        <Route path='/friends' render={() => <FriendsContainer/>}/>
                        <Route path='/allusers' render={() => <UsersContainer/>}/>
                    </div>


                </div>
                <Footer/>
            </div>


    );
}

export default App;
