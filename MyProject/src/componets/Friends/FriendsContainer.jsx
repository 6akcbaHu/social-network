import s from './Friends.module.css';
import Friends from "./Friends";

const FriendsContainer = (props) => {
    let state = props.store.getState()

    return (<Friends state={state.friendsPage}/>
    )
}
export default FriendsContainer;