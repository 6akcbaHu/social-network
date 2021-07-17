import React from 'react';
import s from './NavBar.module.css';
import LogoProfile from "../../images/navbar/profile.png";
import LogoMessage from "../../images/navbar/messege.png";
import LogoNews from "../../images/navbar/news.png";
import LogoMusic from "../../images/navbar/music.png";
import LogoSetting from "../../images/navbar/settings.png";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCamera, faCogs,
    faEnvelope,
    faHouseUser,
    faMusic,
    faNewspaper,
    faUserFriends
} from "@fortawesome/free-solid-svg-icons";
function Links(props) {
    return (
        <li>
            <NavLink to={props.url} activeClassName={s.active}>
                <div className={s.nav__item}>
                    <p>{props.icon}</p>
                    <span>{props.item}</span>
                </div>
            </NavLink>
        </li>
    )
}

function NavBar(props) {

    let link = props.state.map(i => <Links url={i.url} icon={i.icon} item={i.item}/>)
    return (
        <nav className={s.nav}>
            <ul>
                {link}
            </ul>
        </nav>
    )
}


export default NavBar;