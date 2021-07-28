import React from "react";
import s from "./Users.module.css"
import AvaUsers from "../../images/users.jpg";
import {NavLink} from "react-router-dom";
import {getFollowUsers, getUnFollowUsers} from "../../api/api";

const Users = (props) => {

    return (


        <div className={s.users}>
            <div className={s.users__input}>
                <input type="text"/>
            </div>

            {props.users.map(u =>

                <div key={u.id} className={s.users__item}>
                    <div className={s.item__foto}>

                        <NavLink to={'/profile/' + u.id}><img src={u.photos.small != null ? u.photos.small : AvaUsers}/></NavLink>
                    </div>
                    <div className={s.item__name}>
                        <p>{u.name}</p>
                        <p>{'u.location.city'}</p>
                        <p>{'u.location.conutry'}</p>
                    </div>
                    <div className={s.item__button}>
                        {u.followed
                            ? <button disabled={props.followInProgerss.some(id => id === u.id)} onClick={() => {
                                props.unfollowThunkCreator(u.id)

                            }}>unfollow</button>
                            : <button disabled={props.followInProgerss.some(id => id === u.id)} onClick={() => {
                                props.followThunkCreator(u.id)


                            }}>follow</button>}
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