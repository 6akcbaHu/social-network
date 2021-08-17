import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import AvaUsers from "../../../images/users.jpg";
import UpdateProfile from "./updateProfile/UpdateProfile";
import ProfileDataForm from "./updateProfile/ProfileDataForm";


const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }
    let addPhoto = (e) => {
        props.saveProfilePhotoThunkCreator(e.target.files[0])
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false);
        });

    }
    return (

        <div className={s.profile__page}>
            <div className={s.profile__foto}>
                <img src={props.profile.photos.large || AvaUsers} alt=""/>
                {props.isOwner &&
                <label htmlFor="file"><input onChange={addPhoto} activeclassname={s.active} id='file' type="file"/>Upload
                    a photo</label>}
                {props.isOwner &&
                <button onClick={() => setEditMode(true)} className={s.item__edit}>Edit page</button>}
            </div>
            <div className={s.container}>
                <div className={s.container__status}><ProfileStatusWithHooks status={props.status}
                                                                             updateStatus={props.updateStatus}/></div>
                <div className={s.container__description}>
                    {editMode ?
                        <ProfileDataForm initialValues={props.profile} profile={props.profile} editMode={editMode}
                                         onSubmit={onSubmit}/> :
                        <ProfileData profile={props.profile}
                                     isOwner={props.isOwner}
                                     editMode={editMode}
                                     goToEditMode={() => setEditMode(true)}/>}
                </div>
            </div>
        </div>


    )

}
const ProfileData = (props) => {
    return (<div className={s.profile__description}>
            <p>{props.profile.fullName}</p>
            <p>looking for a job :{props.profile.lookingForAJob ? 'yes' : 'no'}</p>
            <p>My professional skills:{props.profile.lookingForAJobDescription || '----'}</p>
            <p>About me: {props.profile.aboutMe || '----'}</p>
            <div>Contacts:
                {Object.keys(props.profile.contacts).map(key => <UpdateProfile contact={key}
                                                                               key={key}
                                                                               contactValue={props.profile.contacts[key]}
                                                                               editMode={props.editMode}/>)}

            </div>
        </div>
    )
}

export default ProfileInfo;