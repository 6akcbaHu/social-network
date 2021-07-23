import React from "react";
import s from "./Users.module.css"
import AvaUsers from "../../images/users.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {

    return (


        <div className={s.users}>
            <div className={s.users__input}>
                <input type="text"/>
            </div>

            {props.users.map(u =>

                <div key={u.id} className={s.users__item}>
                    <div className={s.users__item__foto}>

                        <NavLink to={'/profile/' + u.id}><img src={u.photos.small != null ? u.photos.small : AvaUsers}/></NavLink>
                    </div>
                    <div className={s.users__item__name}>
                        <p>{u.name}</p>
                        <p>{'u.location.city'}</p>
                        <p>{'u.location.conutry'}</p>
                    </div>
                    <div className={s.users__item__button}>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/` + u.id, {
                                    withCredentials: true,
                                    headers: {'API-KEY': 'b79d95aa-87b5-4f23-94a2-f3e61c1d9f98'},
                                }).then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unfollow(u.id)
                                    }
                                })

                            }}>unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/` + u.id, {}, {
                                    withCredentials: true,
                                    headers: {'API-KEY': 'b79d95aa-87b5-4f23-94a2-f3e61c1d9f98'},
                                }).then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.follow(u.id)
                                    }
                                })

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