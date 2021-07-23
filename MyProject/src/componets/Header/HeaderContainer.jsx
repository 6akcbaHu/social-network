import React from 'react';
import s from './Header.module.css';
import LogoHeader from '../../images/header/logo1.png'
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/reducerProfile";
import {setAuthMeData} from "../../redux/reducerAuth";
import {getHeaderLogin} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        getHeaderLogin().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                this.props.setAuthMeData(id, login, email)

            }


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
