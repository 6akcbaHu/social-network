import React from 'react';
import s from "../Dialog/Dialog.module.css";
import DialogfItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";


const Dialog = (props) => {


    let dialogsElements = props.dialogsData.map(el => <DialogfItem name={el.name} key={el.id} id={el.id}/>)
    let messagesElements = props.messages.map(el => <Message message={el.message} key={el.id} img={el.img} name={el.name} position={el.position}/>)

    // let newMessagePost = React.createRef();

    // let addMessage = () => {
    //
    //     props.addMessage()
    //
    // }
    // let onMessageChange = (e) => {
    //
    //     let text = e.currentTarget.value
    //     props.onMessageChange(text)
    //
    // }
    let addNewMessage=(value)=>{
        // debugger
        props.addMessage(value.newMyMessage)
    }

        return (
            <div className={s.dialog}>
                <div className={s.dialog__name}>
                    {dialogsElements}
                </div>
                <div className={s.dialog__message}>
                    {messagesElements}
                    {/*{myMessagesElements}*/}
                   <AddMessageRedaxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        )


}
const AddMessageForm=(props)=>{

    return(
        <form onSubmit={props.handleSubmit} className={s.dialog__btn}>
                        <Field component={'textarea'} name={'newMyMessage'}/>
            <p>
                <button>send</button>
            </p>
        </form>
    )
}
const AddMessageRedaxForm=reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)
export default Dialog;