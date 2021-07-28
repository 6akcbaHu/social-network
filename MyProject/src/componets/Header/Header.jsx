import React from 'react';
import s from './Header.module.css';
import LogoHeader from '../../images/header/logo1.png'
import {NavLink} from "react-router-dom";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = (props) => {

    return (
        <header className={s.header}>
            <div className={s.header__logo}>
                <img src={LogoHeader} alt=""/>
            </div>
            <div className={s.header__login}>
                {props.isAuth ?
                    <div>
                        <NavLink to='/profile'>{props.login}</NavLink>
                        <div className={s.exit}>
                            <button onClick={props.logout}><FontAwesomeIcon icon={faSignOutAlt}/> Sign Out</button>
                        </div>
                    </div>
                    :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;