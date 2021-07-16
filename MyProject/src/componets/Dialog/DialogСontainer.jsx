import React from 'react';
import {addMyMessageActionCreator, updateNewMyMessageActionCreator} from "../../redux/reducerDialog";
import Dialog from "./Dialog";

const DialogContainer = (props) => {
    let state=props.store.getState()

    let addMessage = () => {


        props.store.dispatch(addMyMessageActionCreator())

    }
    let onMessageChange = (text) => {


        let action = updateNewMyMessageActionCreator(text);
        props.store.dispatch(action)

    }

        return (
            <Dialog addMessage={addMessage}
                    onMessageChange={onMessageChange}
                    dialogsData={state.dialogsPage.dialogsData}
                    messages={state.dialogsPage.messages}
                    newMyMessage={state.dialogsPage.newMyMessage}/>
        )


}

export default DialogContainer;