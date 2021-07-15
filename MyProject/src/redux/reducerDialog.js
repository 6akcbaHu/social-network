const ADD_MY_MESSAGE = 'ADD-MY-MESSAGE';
const UPDATE_NEW_MY_MESSAGE = 'ADD-NEW-MMY-MESSAGE';

let initialState={
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
        {
            id: 9,
            name: 'Дмитрий Комаров Игоревичк',
            message: 'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
            img: "https://www.meme-arsenal.com/memes/4522023f3e25467b5328d24596676806.jpg",
            position: 'right'
        },


    ],
    newMyMessage: '',
}

const reducerDialog = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MY_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                name: 'Me',
                message: state.newMyMessage,
                img: "https://www.audit-it.ru/upload/main/36b/1363522119_1583831715.jpg",
                position: 'left'
            }
            state.messages.push(newMessage);

            state.newMyMessage = '';
            return state;
        case UPDATE_NEW_MY_MESSAGE:
            state.newMyMessage = action.newText;
            return state;
        default:
            return state;
    }

}
export const addMyMessageActionCreator = () => ({type: ADD_MY_MESSAGE})
export const updateNewMyMessageActionCreator = (text) =>
    ({type: UPDATE_NEW_MY_MESSAGE, newText: text})
export default reducerDialog;