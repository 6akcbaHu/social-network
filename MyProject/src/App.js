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


function App(props) {

    return (

            <div className="wrapper">
                <Header/>
                <div className="content">

                    <div className="content__item">
                        <NavBar state={props.state.navPage}/>
                        <Route path='/profile' render={() => <Profile profilesPage={props.state.profilesPage}
                                                                      friends={props.state.friendsPage}
                                                                      dispatch={props.dispatch}/>}/>
                        <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}
                                                                      dispatch={props.dispatch}/>}/>
                        <Route path='/friends' render={() => <Friends state={props.state.friendsPage}/>}/>
                    </div>


                </div>
                <Footer/>
            </div>


    );
}

export default App;
