import React from 'react';
import s from './Header.module.css';
import LogoHeader from '../../images/header/logo1.png'
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/reducerProfile";
import {setAuthMeData} from "../../redux/reducerAuth";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                this.props.setAuthMeData(id, login, email)
                debugger
            }
            // this.props.toggleIsFatching(false);

            // this.props.setUserProfile(response.data)

        })

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
export default connect(mapStateToProps, {setAuthMeData})(HeaderContainer);
