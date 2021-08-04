import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import AvaUsers from "../../../images/users.jpg";
import {NavLink} from "react-router-dom";

const ProfileInfo = (props) => {


    if (!props.profile) {
        return <Preloader/>
    }
    let addPhoto = (e) => {
        props.saveProfilePhotoThunkCreator(e.target.files[0])
    }

    return (

        <div className={s.profile__page}>
            <div className={s.profile__foto}>
                <img src={props.profile.photos.large || AvaUsers} alt=""/>
                {props.isOwner &&
                <label  htmlFor="file"><input onChange={addPhoto}  activeClassName={s.active} id='file' type="file"/>Upload a photo</label>}
                <div>sssss</div>
            </div>
            <div className={s.container}>
                {/*<p>SATATUS</p>*/}
                <div className={s.container__status}><ProfileStatusWithHooks status={props.status}
                                                                             updateStatus={props.updateStatus}/></div>
                <div className={s.container__description}>
                    <div className={s.profile__description}>
                        <p>About me: {props.profile.aboutMe || '----'}</p>
                        <p>Contacts:
                            <ul>
                                <li className={s.contacts}>facebook:{props.profile.contacts.facebook || '----'}</li>
                                <li className={s.contacts}>github:{props.profile.contacts.github || '----'}</li>
                                <li className={s.contacts}>instagram:{props.profile.contacts.instagram || '----'}</li>
                                <li className={s.contacts}>mainLink:{props.profile.contacts.mainLink || '----'}</li>
                                <li className={s.contacts}>twitter:{props.profile.contacts.twitter || '----'}</li>
                                <li className={s.contacts}>vk:{props.profile.contacts.vk || '----'}</li>
                                <li className={s.contacts}>website:{props.profile.contacts.website || '----'}</li>
                                <li className={s.contacts}>youtube:{props.profile.contacts.youtube || '----'}</li>
                            </ul>
                        </p>
                    </div>
                    <div className={s.profile__education}>
                        <div className="education__name">{props.profile.fullName}</div>
                        <div className="education__birthday">15 november</div>
                        <div className="education__education">BGTU'14</div>
                        <div className="education__country">Russia</div>
                        <div className="education__city">Bryansk</div>
                    </div>
                </div>
            </div>
        </div>


    )

}

export default ProfileInfo;