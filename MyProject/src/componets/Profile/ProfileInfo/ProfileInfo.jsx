import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (

        <div className={s.profile__page}>
            <div className={s.profile__foto}>
                <img src={props.profile.photos.large} alt=""/>
            </div>
            <div className={s.container}>
                {/*<p>SATATUS</p>*/}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div className={s.container__description}>
                    <div className={s.profile__description}>{props.profile.aboutMe}
                    </div>
                    <div className={s.profile__education}>
                        <div className="profile__education__name">{props.profile.fullName}</div>
                        <div className="profile__education__birthday">15 november</div>
                        <div className="profile__education__education">BGTU'14</div>
                        <div className="profile__education__country">Russia</div>
                        <div className="profile__education__city">Bryansk</div>
                    </div>
                </div>
            </div>
        </div>


    )

}

export default ProfileInfo;