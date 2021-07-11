import React from 'react';
import s from "../Dialog/Dialog.module.css";
import {NavLink} from "react-router-dom";
import DialogfItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import MyMessage from "./Message/MyMessage/MyMessage";

const Dialog = (props) => {

    let dialogsElements = props.state.dialogsData.map(el => <DialogfItem name={el.name} id={el.id}/>)
    let messagesElements = props.state.messages.map(el => <Message message={el.message} img={el.img} name={el.name}/>)
    let myMessagesElements = props.state.myMessages.map(el => <MyMessage message={el.message} img={el.img} name={el.name}/>)

    let newMessagePost = React.createRef();
    let addMessage = () => {
        let text = newMessagePost.current.value;
        alert(text);
    }

    return (
        <div className={s.dialog}>
            <div className={s.dialog__name}>
                {dialogsElements}
            </div>
            <div className={s.dialog__message}>
                {myMessagesElements}
                {messagesElements}
                <div className={s.dialog__message__btn}>
                    <textarea ref={newMessagePost}></textarea>
                    <p>
                        <button onClick={addMessage}>send</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Dialog;