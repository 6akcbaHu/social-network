const ADD_MY_MESSAGE = 'ADD-MY-MESSAGE';

let initialState = {
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
            img: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg",
            position: 'right'
        },
        {
            id: 4,
            name: 'sveta',
            message: 'hello',
            img: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg",
            position: 'right'
        },
        {
            id: 5,
            name: 'kolya',
            message: 'hi',
            img: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg",
            position: 'right'
        },
        {
            id: 6,
            name: 'valera',
            message: 'ggggsqqssqs',
            img: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg",
            position: 'right'
        },
        {
            id: 7,
            name: 'igor',
            message: 'ggggsqqssqs',
            img: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg",
            position: 'right'
        },
        {
            id: 8,
            name: 'Liver',
            message: 'privet',
            img: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg",
            position: 'right'
        },
        {
            id: 9,
            name: 'Дмитрий Комаров Игоревичк',
            message: 'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
            img: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg",
            position: 'right'
        },


    ],

}

const reducerDialog = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MY_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    id: state.messages.length + 1,
                    name: 'Me',
                    message: action.newMyMessage,
                    img: "https://www.audit-it.ru/upload/main/36b/1363522119_1583831715.jpg",
                    position: 'left'
                }]
            };

        default:
            return state;
    }

}
export const addMyMessageActionCreator = (newMyMessage) => ({type: ADD_MY_MESSAGE,newMyMessage})
export default reducerDialog;