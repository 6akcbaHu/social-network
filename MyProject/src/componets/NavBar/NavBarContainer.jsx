import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import NavBar from "./NavBar";

function NavBarContainer(props) {
    let state=props.store.getState()

    // let link = props.state.itemsNav.map(i => <Links url={i.url} icon={i.icon} item={i.item}/>)
    return (<NavBar state={state.navPage.itemsNav}/>)
}


export default NavBarContainer;