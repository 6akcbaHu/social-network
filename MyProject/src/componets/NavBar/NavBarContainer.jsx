import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import NavBar from "./NavBar";

import {connect} from "react-redux";

// function NavBarContainer(props) {
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState()
//                 return <NavBar state={state.navPage.itemsNav}/>
//
//             }}
//
//         </StoreContext.Consumer>
//
//     )
// }
let mapStateToProps=(state)=>{
    return{
        state:state.navPage.itemsNav
    }
}
// let mapDispatchToProps=()=>{
//     return
// }
const NavBarContainer=connect(mapStateToProps)(NavBar)
export default NavBarContainer;