import React, {useEffect} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import AvaUsers from "../../../images/users.jpg";

const ProfileInfo = (props) => {


    if (!props.profile) {
        return <Preloader/>
    }
    let addPhoto=(e)=>{
        props.saveProfilePhotoThunkCreator(e.target.files[0])
    }
    return (

        <div className={s.profile__page}>
            <div className={s.profile__foto}>
                <img src={props.profile.photos.large || AvaUsers} alt=""/>
                {props.isOwner && <input onChange={addPhoto} type="file"/>}
            </div>
            <div className={s.container}>
                {/*<p>SATATUS</p>*/}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <div className={s.container__description}>
                    <div className={s.profile__description}>{props.profile.aboutMe}
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