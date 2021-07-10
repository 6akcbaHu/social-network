import React from 'react';
import s from './Footer.module.css';
import LogoHeader from '../../images/header/logo1.png'

const Footer=()=>{
    return(
        <header className={s.footer}>
            <img src={LogoHeader} alt=""/>
        </header>
    )
}

export default Footer;