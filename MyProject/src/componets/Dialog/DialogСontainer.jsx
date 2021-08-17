import React from 'react';
import {addMyMessageActionCreator} from "../../redux/reducerDialog";
import Dialog from "./Dialog";
import {connect} from "react-redux";
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
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMyMessage) => {
            dispatch(addMyMessageActionCreator(newMyMessage))
        }
    }

}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialog)