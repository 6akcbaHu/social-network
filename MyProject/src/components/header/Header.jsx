import React from 'react';
// import css from "file.css";

import s from './Header.module.css';
import logo from '../../images/logo1.png';
const styleLogo={
    // width:'100px',
    height:'50px'
}
const Header=()=>{
    return  <header className={s.header}>
        <img src={logo} style={styleLogo}/>
    </header>
}
export default Header;