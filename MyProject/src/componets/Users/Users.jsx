import React from "react";
import s from "./Users.module.css"
import * as axios from "axios";
import AvaUsers from "../../images/users.jpg";


// const Users = (props) => {
//
//     if (props.users.length === 0) {
//         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
//                    props.setUsers(response.data.items)
//     })
//     }
//
//     return (
//
//
//         <div className={s.users}>
//             <div className={s.users__input}>
//                 <input type="text"/>
//             </div>
//
//             {props.users.map(u =>
//
//                 <div key={u.id} className={s.users__item}>
//                     <div className={s.users__item__foto}>
//                         <img src={u.photos.small!=null?u.photos.small:AvaUsers}/>
//                     </div>
//                     <div className={s.users__item__name}>
//                         <p>{u.name}</p>
//                         <p>{'u.location.city'}</p>
//                         <p><p>{'u.location.conutry'}</p></p>
//                     </div>
//                     <div className={s.users__item__button}>
//                         {u.followed
//                         ? <button onClick={()=>
//                         props.unfollow(u.id)}>unfollow</button>
//                         :<button onClick={()=>
//                         props.follow(u.id)}>follow</button>}
//                     </div>
//                 </div>
//             )}
//         </div>
//     )
// }
class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {


        return (


            <div className={s.users}>
                <div className={s.users__input}>
                    <input type="text"/>
                </div>

                {this.props.users.map(u =>

                    <div key={u.id} className={s.users__item}>
                        <div className={s.users__item__foto}>
                            <img src={u.photos.small != null ? u.photos.small : AvaUsers}/>
                        </div>
                        <div className={s.users__item__name}>
                            <p>{u.name}</p>
                            <p>{'u.location.city'}</p>
                            <p><p>{'u.location.conutry'}</p></p>
                        </div>
                        <div className={s.users__item__button}>
                            {u.followed
                                ? <button onClick={() =>
                                    this.props.unfollow(u.id)}>unfollow</button>
                                : <button onClick={() =>
                                    this.props.follow(u.id)}>follow</button>}
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Users;