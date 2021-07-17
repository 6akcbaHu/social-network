import React from 'react';
import s from "../Dialog/Dialog.module.css";
import DialogfItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialog = (props) => {



    let dialogsElements = props.dialogsData.map(el => <DialogfItem name={el.name} id={el.id}/>)
    let messagesElements = props.messages.map(el => <Message message={el.message} img={el.img} name={el.name} position={el.position}/>)


    let newMessagePost = React.createRef();

    let addMessage = () => {

        props.addMessage()

    }
    let onMessageChange = () => {

        let text = newMessagePost.current.value
        props.onMessageChange(text)

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
                                  value={props.newMyMessage}></textarea>
                        <p>
                            <button onClick={addMessage}>send</button>
                        </p>
                    </div>
                </div>
            </div>
        )


}

export default Dialog;