import React from 'react';
import s from "./../Dialog.module.css";
import {NavLink} from "react-router-dom";

const DialogfItem = (props) => {
    return (<div className={s.dialog__name__name}>
            <div className="dialog__name__img">
                <img
                    src="https://habrastorage.org/getpro/habr/post_images/3db/ac4/5df/3dbac45df51c33b0bd63621081afbe29.jpg"
                    alt=""/>
            </div>
            <NavLink to={'/dialog/' + props.id}>{props.name}</NavLink>
        </div>
    )

}

export default DialogfItem;