import React from 'react';
import s from './FriendsProfile.module.css';
import FriendsItem from "./FriendsItem/FriendsItem";


const FriendsProfile = (props) => {

    let friends=props.friendsList.map(el=><FriendsItem name={el.name} key={el.id} img={el.img}/>)

    return (
        <div className={s.content}>

        <div className={s.text}><a href="">Friends</a></div>
            <div className={s.friendss}>
                {friends}
            </div>

                </div>


    )
}

export default FriendsProfile;