import React from 'react';
import {addMyMessageActionCreator, updateNewMyMessageActionCreator} from "../../redux/reducerDialog";
import Dialog from "./Dialog";
// import StoreContext from "../../StoreContext";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {dialogsDataSelector, messagesSelector, newMyMessageSelector} from "../selectors/dialogSelectors";

let mapStateToProps = (state) => {
    return {
        dialogsData: dialogsDataSelector(state),
        messages: messagesSelector(state),
        newMyMessage: newMyMessageSelector(state),

    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        addMessage:(newMyMessage)=>{
            dispatch(addMyMessageActionCreator(newMyMessage))
            debugger
        },
        // onMessageChange:(text)=>{
        //     dispatch(updateNewMyMessageActionCreator(text))
        // }
    }

}

export default compose(connect(mapStateToProps,mapDispatchToProps),withAuthRedirect)(Dialog)