// import {useEffect} from "react";

// const ADD_FRIENDS='ADD_FRIENDS'
//
// let initialState={
//     friendsList: [
//         {id: 1, name: 'Dima.k', img: "https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg"},
        // {
        //     id: 2,
        //     name: 'Lena ',
        //     img: "https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg"
        // },
        // {
        //     id: 3,
        //     name: 'Masha ',
        //     img: "https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg"
        // },
        // {
        //     id: 4,
        //     name: 'Kolya',
        //     img: "https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg"
        // },
        // {
        //     id: 5,
        //     name: 'Den S',
        //     img: "https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg"
        // },
        // {
        //     id: 6,
        //     name: 'Vlad N',
        //     img: "https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg"
        // },
        // {
        //     id: 7,
        //     name: 'Oleg K',
        //     img: "https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg"
        // },
        // {
        //     id: 8,
        //     name: 'Igor P',
        //     img: "https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg"
        // },
        // {
        //     id: 9,
        //     name: 'Slavik k',
        //     img: "https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg"
        // }
//     ]
// }


// const reducerFriends=(state=initialState,action)=> {


    // if(action===null){
    //     return state
    // }
    // console.log(action)
    // console.log(window.currentUser)
// if(action.type===ADD_FRIENDS){
//     console.log(action)
// }
//     switch (action.type) {
//
//         case ADD_FRIENDS:
//             // return state
//             return {
//                 ...state,
//     //             newPostText: action.newMyPost,
//                 friendsList: [...state.friendsList, {id: action.users.userId, name: action.users.fullName}],
//     // //
//             }
//             return state
//
// }
// export const addFriend = (users) => ({type: ADD_FRIENDS, users})
//
//  export default reducerFriends;