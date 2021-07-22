import React from "react";
import s from "./Users.module.css"
import AvaUsers from "../../images/users.jpg";

const Users = (props) => {

    return (


        <div className={s.users}>
            <div className={s.users__input}>
                <input type="text"/>
            </div>

            {props.users.map(u =>

                <div key={u.id} className={s.users__item}>
                    <div className={s.users__item__foto}>
                        <img src={u.photos.small != null ? u.photos.small : AvaUsers}/>
                    </div>
                    <div className={s.users__item__name}>
                        <p>{u.name}</p>
                        <p>{'u.location.city'}</p>
                        <p>{'u.location.conutry'}</p>
                    </div>
                    <div className={s.users__item__button}>
                        {u.followed
                            ? <button onClick={() =>
                                props.unfollow(u.id)}>unfollow</button>
                            : <button onClick={() =>
                                props.follow(u.id)}>follow</button>}
                    </div>
                </div>
            )}
            <button className={s.user__button} onClick={() => {
                props.nextPage()
            }}>Show more
            </button>
        </div>
    )


}

export default Users;