import './style/App.css';
import React from 'react';
import Footer from "./componets/Footer/Footer";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import NavBarContainer from "./componets/NavBar/NavBarContainer";
import FriendsContainer from "./componets/Friends/FriendsContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/reducerApp";
import Preloader from "./componets/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspence";
import News from "./componets/News/NewsList";
import Error404 from "./componets/404error/error";

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
                        <Switch>
                            <Route exact path='/'><Redirect to='/profile'/></Route>
                            <Route path='/profile/:userId?' render={() => withSuspense(ProfileContainer)}/>
                            <Route path='/dialogs' render={() => withSuspense(DialogContainer)}/>
                            <Route path='/friends' render={() => <FriendsContainer/>}/>
                            <Route path='/allusers' render={() => withSuspense(UsersContainer)}/>
                            <Route path='/login' render={() => withSuspense(Login)}/>
                            <Route path='/news' render={() => <Error404/>}/>
                            <Route path='*' render={() => <Error404/>}/>
                        </Switch>
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
