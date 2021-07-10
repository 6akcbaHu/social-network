import React from 'react';
import s from './Header.module.css';
import LogoHeader from '../../images/header/logo1.png'

const Header=()=>{
    return(
        <header className={s.header}>
            <img src={LogoHeader} alt=""/>
        </header>
    )
}

export default Header;