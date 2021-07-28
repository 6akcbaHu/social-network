import React from 'react';
import s from "./Message.module.css";


const Message = (props) => {
    let style={
        float:props.position
    }

    return (<div className={s.block} style={style}>
            {/*<div className={s.null}></div>*/}
            <div className={s.block__foto}>
                <img
                    src={props.img}
                    alt=""/>
                <p>{props.name}</p>
            </div>
            <div className={s.block__message}>
                <p>{props.message}</p>
            </div>

        </div>
    )
    // return <div className={s.dialog__message_messages}>{props.message}</div>
}


export default Message;