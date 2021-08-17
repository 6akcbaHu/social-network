import React from 'react';
import s from './FriendsProfile.module.css';
import FriendsItem from "./FriendsItem/FriendsItem";
import {NavLink} from "react-router-dom";


const FriendsProfile = (props) => {

    let friends=props.friendsList.map(el=><FriendsItem name={el.name} key={el.id} img={el.img}/>)

    return (
        <div className={s.content}>

        <div className={s.text}><NavLink to='/friends'>Friends </NavLink></div>
            <div className={s.friends}>
                {friends}
            </div>

                </div>


    )
}

export default FriendsProfile;