import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCamera, faCogs,
    faEnvelope,
    faHouseUser,
    faMusic,
    faNewspaper,
    faUserFriends
} from "@fortawesome/free-solid-svg-icons";
import {text} from "@fortawesome/fontawesome-svg-core";
import reducerProfile from "./reducerProfile";
import reducerDialog from "./reducerDialog";
import reducerNav from "./reducerNav";
import reducerFriends from "./reducerFriends";



let store = {
    _state: {
        profilesPage: {
            posts: [
                {id: 1, message: 'Hi', likeCount: 73},
                {id: 2, message: 'Hello', likeCount: 11},
                {id: 3, message: 'kyky', likeCount: 21},
                {id: 4, message: 'kykysssss', likeCount: 366},
                {id: 4, message: 'kykysssss', likeCount: 366}
            ],
            newPostText: 'бычок',
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'dima'},
                {id: 2, name: 'sveta'},
                {id: 3, name: 'kolya'},
                {id: 4, name: 'valera'},
                {id: 5, name: 'igor'}
            ],
            messages: [
                {
                    id: 1,
                    name: 'Me',
                    message: 'hi',
                    img: "https://www.audit-it.ru/upload/main/36b/1363522119_1583831715.jpg",
                    position: 'left'
                },
                {
                    id: 2,
                    name: 'Me',
                    message: 'hello',
                    img: "https://www.audit-it.ru/upload/main/36b/1363522119_1583831715.jpg",
                    position: 'left'
                },
                {
                    id: 3,
                    name: 'dima',
                    message: 'hi',
                    img: "https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg",
                    position: 'right'
                },
                {
                    id: 4,
                    name: 'sveta',
                    message: 'hello',
                    img: "https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg",
                    position: 'right'
                },
                {
                    id: 5,
                    name: 'kolya',
                    message: 'hi',
                    img: "https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg",
                    position: 'right'
                },
                {
                    id: 6,
                    name: 'valera',
                    message: 'ggggsqqssqs',
                    img: "https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg",
                    position: 'right'
                },
                {
                    id: 7,
                    name: 'igor',
                    message: 'ggggsqqssqs',
                    img: "https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg",
                    position: 'right'
                },
                {
                    id: 8,
                    name: 'Liver',
                    message: 'privet',
                    img: "https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg",
                    position: 'right'
                },


            ],
            newMyMessage: '',

        },
        navPage: {
            itemsNav: [
                {url: '/profile', item: "My profile", icon: <FontAwesomeIcon icon={faHouseUser}/>},
                {url: '/dialogs', item: "Messages", icon: <FontAwesomeIcon icon={faEnvelope}/>},
                {url: '/friends', item: "Friends", icon: <FontAwesomeIcon icon={faUserFriends}/>},
                {url: '/news', item: "News", icon: <FontAwesomeIcon icon={faNewspaper}/>},
                {url: '/photos', item: "Photos", icon: <FontAwesomeIcon icon={faCamera}/>},
                {url: '/music', item: "Music", icon: <FontAwesomeIcon icon={faMusic}/>},
                {url: '/setting', item: "Setting", icon: <FontAwesomeIcon icon={faCogs}/>},
            ]
        },
        friendsPage: [
            {id: 1, name: 'Dima.k', img: "https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg"},
            {
                id: 2,
                name: 'Lena Korova',
                img: "https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg"
            },
            {
                id: 3,
                name: 'Masha Svinyia',
                img: "https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg"
            },
            {
                id: 4,
                name: 'Kolya Baran',
                img: "https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg"
            },
            {
                id: 5,
                name: 'Den Shesnok',
                img: "https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg"
            },
            {
                id: 6,
                name: 'Vlad Nedotepa',
                img: "https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg"
            },
            {id: 7, name: 'Oleg Kokos', img: "https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg"},
            {id: 8, name: 'Igor Petuh', img: "https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg"},
            {
                id: 9,
                name: 'Slavik kozel',
                img: "https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg"
            }
        ]
    },
    _rerenderEntireThree() {

    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireThree = observer;
    },

    dispatch(action) {
        this._state.profilesPage = reducerProfile(this._state.profilesPage, action);
        this._state.dialogsPage = reducerDialog(this._state.dialogsPage, action);
        this._state.navPage = reducerNav(this._state.navPage, action);
        this._state.friendsPage = reducerFriends(this._state.friendsPage, action);
        this._rerenderEntireThree(this._state);

    }
}


export default store;