import './style/App.css';
import React from 'react';
// import Header from "./componets/Header/Header";
// import Profile from "./componets/Profile/Profile";
import Footer from "./componets/Footer/Footer";
import {Route, withRouter} from "react-router-dom";
import DialogContainer from "./componets/Dialog/DialogСontainer";
import NavBarContainer from "./componets/NavBar/NavBarContainer";
import FriendsContainer from "./componets/Friends/FriendsContainer";
// import AllUsers from "./componets/Users/Users";
import UsersContainer from "./componets/Users/UsersContainer";
import ProfileContainer from "./componets/Profile/ProfileContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";
import Login from "./componets/Login/Login";
import {connect} from "react-redux";
import {getAuthMeData} from "./redux/reducerAuth";
import {compose} from "redux";
import {initializeApp} from "./redux/reducerApp";
import Preloader from "./componets/common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
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
                        <Route path='/login' render={() => <Login/>}/>
                    </div>


                </div>
                <Footer/>
            </div>


        );
    }
}
let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
          }

}
export default compose(withRouter(connect(mapStateToProps, {initializeApp})(App)));
