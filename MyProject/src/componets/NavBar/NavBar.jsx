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
    let link = props.state.itemsNav.map(i => <Links url={i.url} icon={i.icon} item={i.item}/>)
    return (
        <nav className={s.nav}>
            <ul>
                {link}
            </ul>
        </nav>
    )
}
// const NavBar=()=>{
//     return(
//         <ul className={s.nav}>
//             <NavLink to="/profile">
//                 <li className={s.nav__item}>
//                     <p><FontAwesomeIcon icon={faCamera}/></p>
//                     <span>Profile</span>
//                 </li>
//             </NavLink>
//             <NavLink to="/profile">
//                 <li className={s.nav__item}>
//                     <p><FontAwesomeIcon icon={faCamera}/></p>
//                     <span>Profile</span>
//                 </li>
//             </NavLink>
//         </ul>
      // <ul className={s.nav}>
      //     <li className={s.nav__item}>
      //       <p>   <FontAwesomeIcon icon={faCamera}/></p>
      //         <div className={s.ni__text}><NavLink to="/profile">Profile</NavLink></div>
      //     </li>
      //     <li className={s.nav__item}>
      //         <p>   <FontAwesomeIcon icon={faCamera}/></p>
      //         <div className={`${s.ni__text} ${s.active}`}><NavLink to="/dialog">Message</NavLink></div>
      //     </li>
      //     <li className={s.nav__item}>
      //         <p>   <FontAwesomeIcon icon={faCamera}/></p>
      //         <div className={s.ni__text}><NavLink to="/news">News</NavLink></div>
      //     </li>
      //     <li className={s.nav__item}>
      //         <p>   <FontAwesomeIcon icon={faCamera}/></p>
      //         <div className={s.ni__text}><NavLink to="/music">Music</NavLink></div>
      //     </li>
      //     <li className={s.nav__item}>
      //         <p>   <FontAwesomeIcon icon={faCamera}/></p>
      //         <div className={s.ni__text}><NavLink to="/settings">Settings</NavLink></div>
      //     </li>
      // </ul>
//     )
// }

export default NavBar;