import React from 'react';
import s from './Header.module.css';
import LogoHeader from '../../images/header/logo1.png'
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/reducerProfile";
import {logout, setAuthMeData} from "../../redux/reducerAuth";
import {getHeaderLogin} from "../../api/api";
import {getAuthMeData} from "../../redux/reducerAuth";

class HeaderContainer extends React.Component {
    componentDidMount() {
       this.props.getAuthMeData()



    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {

    return {

        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {getAuthMeData,logout})(HeaderContainer);
