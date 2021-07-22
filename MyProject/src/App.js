import './style/App.css';
import React from 'react';
import Header from "./componets/Header/Header";
import Profile from "./componets/Profile/Profile";
import Footer from "./componets/Footer/Footer";
import {Route} from "react-router-dom";
import DialogContainer from "./componets/Dialog/DialogСontainer";
import NavBarContainer from "./componets/NavBar/NavBarContainer";
import FriendsContainer from "./componets/Friends/FriendsContainer";
import AllUsers from "./componets/Users/Users";
import UsersContainer from "./componets/Users/UsersContainer";
import ProfileContainer from "./componets/Profile/ProfileContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";

function App(props) {

    return (

            <div className="wrapper">
                <HeaderContainer/>
                <div className="content">

                    <div className="content__item">
                        <NavBarContainer/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
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
