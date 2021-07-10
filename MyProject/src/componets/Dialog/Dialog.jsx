import React from 'react';
import s from "../Dialog/Dialog.module.css";
import {NavLink} from "react-router-dom";
import DialogfItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialog = (props) => {
    console.log(props)
    let dialogsElements = props.state.dialogsData.map(el => <DialogfItem name={el.name} id={el.id}/>)


    let messagesElements=props.state.messages.map(el=> <Message message={el.message} img={el.img} name={el.name}/>)
    return (
        <div className={s.dialog}>
            <div className={s.dialog__name}>
                {dialogsElements}
            </div>
            <div className={s.dialog__message}>
                <div className={s.dialog__message__block}>
                    <div className={s.dialog__message__block__foto}>
                        <img
                            src="https://habrastorage.org/getpro/habr/post_images/3db/ac4/5df/3dbac45df51c33b0bd63621081afbe29.jpg"
                            alt=""/>
                        <p>Dima.k</p>
                    </div>
                    <div className={s.dialog__message__block__message}>Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit.
                    </div>
                    <div className={s.null}></div>
                </div>

                {/*<div className={s.dialog__message__block}>*/}
                {/*    <div className={s.null}></div>*/}
                {/*    <div className={s.dialog__message__block__foto}><img*/}
                {/*        src="https://habrastorage.org/getpro/habr/post_images/3db/ac4/5df/3dbac45df51c33b0bd63621081afbe29.jpg"*/}
                {/*        alt=""/>*/}
                {/*        <p>Dima.k</p>*/}
                {/*    </div>*/}
                {/*    <div className={s.dialog__message__block__message}>Lorem ipsum dolor sit amet, consectetur*/}
                {/*        adipisicing elit. Accusamus blanditiis commodi deserunt distinctio dolorum eaque earum error*/}
                {/*        exercitationem libero magni minima mollitia necessitatibus, nemo neque nulla praesentium quidem,*/}
                {/*        quisquam vero.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis*/}
                {/*        commodi deserunt distinctio dolorum eaque earum error e>*/}
                {/*    </div>*/}

                {/*</div>*/}
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialog;