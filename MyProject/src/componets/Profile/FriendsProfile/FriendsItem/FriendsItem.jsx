import React from 'react';
import s from "./FriendsItem.module.css";

const FriendsItem = (props) => {
    let name=props.name.split(' ')[0];

    return (
        <div className={s.friends}>
            <div className={s.friends__item}>
                <div className="item__img">
                    <img src={props.img} alt=""/>
                    <p>{name}</p>
                </div>
            </div>
        </div>
    )
}
export default FriendsItem;