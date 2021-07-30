import './style/App.css';
import React from 'react';
// import Header from "./componets/Header/Header";
// import Profile from "./componets/Profile/Profile";
import Footer from "./componets/Footer/Footer";
import {Route, withRouter} from "react-router-dom";
// import DialogContainer from "./componets/Dialog/DialogСontainer";
import NavBarContainer from "./componets/NavBar/NavBarContainer";
import FriendsContainer from "./componets/Friends/FriendsContainer";
// import AllUsers from "./componets/Users/Users";
// import UsersContainer from "./componets/Users/UsersContainer";
// import ProfileContainer from "./componets/Profile/ProfileContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";
// import Login from "./componets/Login/Login";
import {connect} from "react-redux";
import {getAuthMeData} from "./redux/reducerAuth";
import {compose} from "redux";
import {initializeApp} from "./redux/reducerApp";
import Preloader from "./componets/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspence";

const ProfileContainer = React.lazy(() => import('./componets/Profile/ProfileContainer'));
const DialogContainer = React.lazy(() => import('./componets/Dialog/DialogСontainer'));
const UsersContainer = React.lazy(() => import('./componets/Users/UsersContainer'));
const Login = React.lazy(() => import('./componets/Login/Login'));
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
                        <Route path='/profile/:userId?' render={() => withSuspense(ProfileContainer)}/>
                        <Route path='/dialogs' render={() => withSuspense(DialogContainer)}/>
                        <Route path='/friends' render={() => <FriendsContainer/>}/>
                        <Route path='/allusers' render={() => withSuspense(UsersContainer)}/>
                        <Route path='/login' render={() => withSuspense(Login)}/>
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
