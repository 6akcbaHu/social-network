import React from 'react';
import s from "../Dialog/Dialog.module.css";
import {NavLink} from "react-router-dom";
import DialogfItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMyMessageActionCreator, updateNewMyMessageActionCreator} from "../../redux/reducerDialog";

const Dialog = (props) => {

    let dialogsElements = props.state.dialogsData.map(el => <DialogfItem name={el.name} id={el.id}/>)
    let messagesElements = props.state.messages.map(el => <Message message={el.message} img={el.img} name={el.name} position={el.position}/>)

    // let myMessagesElements = props.state.myMessages.map(el => <MyMessage message={el.message} img={el.img}
    //                                                                      name={el.name}/>)

    let newMessagePost = React.createRef();

    let addMessage = () => {

        // let text = newMessagePost.current.value;
        props.dispatch(addMyMessageActionCreator())
        // debugger
        // alert(text);
    }
    let onMessageChange = () => {

        let text = newMessagePost.current.value
        let action = updateNewMyMessageActionCreator(text);
        props.dispatch(action)
        // debugger
    }

        return (
            <div className={s.dialog}>
                <div className={s.dialog__name}>
                    {dialogsElements}
                </div>
                <div className={s.dialog__message}>
                    {messagesElements}
                    {/*{myMessagesElements}*/}
                    <div className={s.dialog__message__btn}>
                        <textarea ref={newMessagePost} onChange={onMessageChange}
                                  value={props.state.newMyMessage}></textarea>
                        <p>
                            <button onClick={addMessage}>send</button>
                        </p>
                    </div>
                </div>
            </div>
        )


}

export default Dialog;