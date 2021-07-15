import s from './Friends.module.css';

const SubblockFriends = (props) => {

    return (
        <div className={s.friends__friendsList}>
            <div className={s.friends__friendsList__foto}>
                <img src={props.img} alt=""/>
            </div>
            <div className={s.friends__friendsList__name}>{props.name}</div>
            <div className={s.friends__friendsList__instruction}>
                <p>To write a message</p>
                <p>Remove friends from list</p>
            </div>
        </div>
    )
}
const Friends = (props) => {

    let friends = props.state.friendsList.map(f => <SubblockFriends img={f.img} name={f.name}/>)
    console.log(props)
    return (
        <div className={s.friends}>
            <div className={s.friends__search}>
                <input type="text" placeholder='Enter your friend'/>
            </div>
            {friends}
        </div>
    )
}
export default Friends;