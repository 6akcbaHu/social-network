import React from 'react';
import s from './Header.module.css';
import LogoHeader from '../../images/header/logo1.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <header className={s.header}>
            <div className={s.header__logo}>
                <img src={LogoHeader} alt=""/>
            </div>
            <div className={s.header__login}>
                {props.isAuth ? props.login :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;