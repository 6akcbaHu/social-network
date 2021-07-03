import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import LogoProfile from '../../images/profile.png';
import LogoMessage from '../../images/messege.png';
import LogoNews from '../../images/news.png';
import LogoSetting from '../../images/settings.png';
import LogoMusic from '../../images/music.png';

// const logoStyleNav = {
//     width: '100px',
//     height: '70px',
//     objectFit:'cover'
// }


const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                <li className={s.item}>
                    <NavLink to="/profile" activeClassName={s.activeLink}>
                        <div className={s.row}>
                            <div className={s.row__logo}><img src={LogoProfile} alt=""/></div>
                            <div className="row__text">Profile</div>
                        </div>
                    </NavLink>
                </li>
                <li className={s.item}><NavLink to="/dialogs" activeClassName={s.activeLink}>
                    <div className={s.row}>
                        <div className={s.row__logo}><img src={LogoMessage} alt=""/></div>
                        <div className="row__text">Message</div>
                    </div>
                </NavLink>
                </li>
                <li className={s.item}><NavLink to="/new" activeClassName={s.activeLink}>
                    <div className={s.row}>
                        <div className={s.row__logo}><img src={LogoNews} alt=""/></div>
                        <div className="row__text">News</div>
                    </div>
                </NavLink>
                </li>
                <li className={s.item}><NavLink to="/music" activeClassName={s.activeLink}>
                    <div className={s.row}>
                        <div className={s.row__logo}><img src={LogoMusic} alt=""/></div>
                        <div className="row__text">Music</div>
                    </div>
                </NavLink>
                </li>
                <li className={s.item}><NavLink to="/setting" activeClassName={s.activeLink}>
                    <div className={s.row}>
                        <div className={s.row__logo}><img src={LogoSetting} alt=""/></div>
                        <div className="row__text">Setting</div>
                    </div>
                </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;