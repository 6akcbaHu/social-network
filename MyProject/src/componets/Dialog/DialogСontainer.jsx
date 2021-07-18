import React from 'react';
import {addMyMessageActionCreator, updateNewMyMessageActionCreator} from "../../redux/reducerDialog";
import Dialog from "./Dialog";
// import StoreContext from "../../StoreContext";
import {connect} from "react-redux";

// const DialogContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState()
//
//                 let addMessage = () => {
//
//
//                     store.dispatch(addMyMessageActionCreator())
//
//                 }
//                 let onMessageChange = (text) => {
//
//
//                     let action = updateNewMyMessageActionCreator(text);
//                     store.dispatch(action)
//
//                 }
//
//                 return <Dialog addMessage={addMessage}
//                                onMessageChange={onMessageChange}
//                                dialogsData={state.dialogsPage.dialogsData}
//                                messages={state.dialogsPage.messages}
//                                newMyMessage={state.dialogsPage.newMyMessage}/>
//             }}
//         </StoreContext.Consumer>
//     )
//
//
// }
let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messages: state.dialogsPage.messages,
        newMyMessage: state.dialogsPage.newMyMessage
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        addMessage:()=>{
            dispatch(addMyMessageActionCreator())
        },
        onMessageChange:(text)=>{
            dispatch(updateNewMyMessageActionCreator(text))
        }
    }

}
const DialogContainer = connect(mapStateToProps,mapDispatchToProps)(Dialog)
export default DialogContainer;