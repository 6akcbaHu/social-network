import React from "react";
import s from './UpdateProfile.module.css'
import {Input} from "../../../common/FormsControls/FormsControls";
import {Field} from "redux-form";

const UpdateProfile = (props) => {
            return (
        <ul>
            <li className={s.list}>
                <div className={s.item__description}><span>{props.contact} :</span>{props.editMode
                ? <Field className={s.item__input} name={"contacts."+props.contact} component={Input}/>
                    :props.contactValue ||'-----'}</div></li>
        </ul>
    )
}

export default UpdateProfile

