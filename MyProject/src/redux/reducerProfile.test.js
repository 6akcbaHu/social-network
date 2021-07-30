import reducerProfile, {addPostActionCreator} from "./reducerProfile";
import React from "react";
let state = {
    posts: [
        {id: 1, message: 'Hi', likeCount: 73},
        {id: 2, message: 'Hello', likeCount: 11},
        {id: 3, message: 'kyky', likeCount: 21},
        {id: 4, message: 'kykysssss', likeCount: 366},
        {id: 5, message: 'kykysssss', likeCount: 366}
    ],

}
test('new post', () => {

    let action=addPostActionCreator('lalala')
let newState=reducerProfile(state,action)
    expect(newState.posts.length).toBe(6)

});

test('new message', () => {

    let action=addPostActionCreator('lalala')
    let newState=reducerProfile(state,action)

    expect(newState.posts[5].message).toBe("lalala")
});
