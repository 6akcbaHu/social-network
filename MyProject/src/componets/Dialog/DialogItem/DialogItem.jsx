import React from 'react';
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogfItem = (props) => {
    return (<div className={s.dialogItem}>
            <div className=".dialogItem__img">
                <img
                    src="https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg"
                    alt=""/>
            </div>
            <NavLink to={`/dialogs/id=${props.id}`}>{props.name}</NavLink>
        </div>
    )

}

export default DialogfItem;