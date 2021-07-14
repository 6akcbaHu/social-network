const ADD_MY_MESSAGE = 'ADD-MY-MESSAGE';
const UPDATE_NEW_MY_MESSAGE = 'ADD-NEW-MMY-MESSAGE';

const reducerDialog = (state, action) => {
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