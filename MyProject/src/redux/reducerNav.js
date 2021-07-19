import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCamera, faCog,
    faUsers,
    faEnvelope,
    faUserAlt,
    faMusic,
    faTv,
    faUserFriends
} from "@fortawesome/free-solid-svg-icons";

let initialState={
    itemsNav: [
        {id:1,url: '/profile', item: "My profile", icon: <FontAwesomeIcon icon={faUserAlt}/>},
        {id:2,url: '/allusers', item: "All Users", icon: <FontAwesomeIcon icon={faUsers}/>},
        {id:3,url: '/dialogs', item: "Messages", icon: <FontAwesomeIcon icon={faEnvelope}/>},
        {id:4,url: '/friends', item: "Friends", icon: <FontAwesomeIcon icon={faUserFriends}/>},
        {id:5,url: '/news', item: "News", icon: <FontAwesomeIcon icon={faTv}/>},
        {id:6,url: '/photos', item: "Photos", icon: <FontAwesomeIcon icon={faCamera}/>},
        {id:7,url: '/music', item: "Music", icon: <FontAwesomeIcon icon={faMusic}/>},
        {id:8,url: '/setting', item: "Setting", icon: <FontAwesomeIcon icon={faCog}/>},
    ]
};

const reducerNav=(state=initialState,action)=>{
    return state;
}
export default reducerNav