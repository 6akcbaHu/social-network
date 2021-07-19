import React from "react";
import s from "./Users.module.css"

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: false,
                name: 'Nikolay',
                img: 'https://img.megaobzor.com/old/alia/895.jpg',
                location: {city: 'Perm', conutry: 'Russia'}
            },
            {
                id: 2,
                name: 'Jacob',
                followed: true,
                img: 'https://i1.sndcdn.com/artworks-000111336685-1cd0h6-t500x500.jpg',
                location: {city: 'Philadelphia,state of Pennsylvania', conutry: 'USA'}
            },
            {
                id: 3,
                followed: false,
                name: 'Nikolay',
                img: 'https://img.megaobzor.com/old/alia/895.jpg',
                location: {city: 'Perm', conutry: 'Russia'}
            },
            {
                id: 4,
                name: 'Jacob',
                followed: true,
                img: 'https://i1.sndcdn.com/artworks-000111336685-1cd0h6-t500x500.jpg',
                location: {city: 'Philadelphia,state of Pennsylvania', conutry: 'USA'}
            },
            {
                id: 5,
                followed: false,
                name: 'Nikolay',
                img: 'https://img.megaobzor.com/old/alia/895.jpg',
                location: {city: 'Perm', conutry: 'Russia'}
            },

            {
                id: 6,
                name: 'Jacob',
                followed: true,
                img: 'https://i1.sndcdn.com/artworks-000111336685-1cd0h6-t500x500.jpg',
                location: {city: 'Philadelphia,state of Pennsylvania', conutry: 'USA'}
            },
            {
                id: 7,
                followed: false,
                name: 'Nikolay',
                img: 'https://img.megaobzor.com/old/alia/895.jpg',
                location: {city: 'Perm', conutry: 'Russia'}
            },



        ])
    }
    console.log(Users)
    return (


        <div className={s.users}>
            <div className={s.users__input}>
                <input type="text"/>
            </div>
            {props.users.map(u =>
                <div key={u.id} className={s.users__item}>
                    <div className={s.users__item__foto}>
                        <img src={u.img}/>
                    </div>
                    <div className={s.users__item__name}>
                        <p>{u.name}</p>
                        <p>{u.location.city}</p>
                        <p><p>{u.location.conutry}</p></p>
                    </div>
                    <div className={s.users__item__button}>
                        {u.followed
                        ? <button onClick={()=>
                        props.unfollow(u.id)}>unfollow</button>
                        :<button onClick={()=>
                        props.follow(u.id)}>follow</button>}
                    </div>
                </div>
            )}
        </div>
    )
}
export default Users;