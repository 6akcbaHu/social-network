import React from 'react';
import s from './FriendsProfile.module.css';
import FriendsItem from "./FriendsItem/FriendsItem";


const FriendsProfile = (props) => {

   debugger
    // console.log(props.friends)
    // eslint-disable-next-line react/jsx-no-undef
    let friends=props.friendsList.map(el=><FriendsItem name={el.name} img={el.img}/>)
    // debugger
    return (
        <div className={s.content}>
            {/*<a href="">FriendsProfile</a>*/}
        <div className={s.text}><a href="">Friends</a></div>
            <div className={s.friendss}>
                {friends}
            </div>

                </div>


    )
}

export default FriendsProfile;