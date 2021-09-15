import s from "../ProfileInfo.module.css";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../common/FormsControls/FormsControls";
import UpdateProfile from "./UpdateProfile";
import React from "react";
import f from "../../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = (props) => {

    return (<form onSubmit={props.handleSubmit} className={s.profile__description}>
            {props.error && <div className={f.formControl}>{props.error}</div>}
            <div className={s.item__description}><p>{props.profile.fullName} :</p>
                <Field className={s.item__input} placeholder={"Full name"} name={"fullName"} component={Input}/></div>
            <div className={s.item__description}><p>looking for a job :</p>
                <Field name={"lookingForAJob"} type={"checkbox"} component={Input}/></div>
            <div className={s.item__description}><p>My professional skills :</p>
                <Field className={s.item__textarea} placeholder={"Profile skills"} name={"lookingForAJobDescription"}
                       component={Textarea}/></div>
            <div className={s.item__description}><p>About me :</p>
                <Field className={s.item__textarea} placeholder={"AboutMe"} name={"aboutMe"} component={Textarea}/>
            </div>
            <div>Contacts:
                {Object.keys(props.profile.contacts).map(key => <UpdateProfile contact={key}
                                                                               key={key}
                                                                               contactValue={props.profile.contacts[key]}
                                                                               editMode={props.editMode}/>)}

            </div>
            <button>save</button>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataReduxForm