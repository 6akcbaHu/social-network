import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

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

    let link = props.state.map(i => <Links url={i.url} icon={i.icon} key={i.id} item={i.item}/>)

    return (
        <nav className={s.nav}>
            <ul>
                {link}
            </ul>
        </nav>
    )
}


export default NavBar;