import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo=()=>{
    return (

    <div className={s.profile__page}>
        <div className={s.profile__foto}>
            <img src="https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg" alt=""/>
        </div>
        <div className={s.profile__description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores, aut qui. Commodi delectus fugiat mollitia nostrum perspiciatis. Adipisci asperiores
            culpa dolorum, excepturi natus nemo omnis quaerat ratione reiciendis sed sequi!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut dolore error explicabo
            incidunt, laborum minus recusandae saepe sunt tempora? Adipisci architecto aspernatur consectetur
            consequatur est ex odit reiciendis, sapiente
        </div>
        <div className={s.profile__education}>
            <div className="profile__education__name">Denis Ryzhenkov</div>
            <div className="profile__education__birthday">15 november</div>
            <div className="profile__education__education">BGTU'14</div>
            <div className="profile__education__country">Russia</div>
            <div className="profile__education__city">Bryansk</div>
        </div>
    </div>

         )

}

export default ProfileInfo;