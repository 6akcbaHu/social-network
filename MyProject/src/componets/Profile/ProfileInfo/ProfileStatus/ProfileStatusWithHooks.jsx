import React, {useEffect, useState} from 'react';
import s from '../ProfileInfo.module.css';
import {updateUserStatusThunkCreator} from "../../../../redux/reducerProfile";
// import Preloader from "../../common/Preloader/Preloader";


// export default ProfileInfo;

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)

    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)

    }
    return (

        <div>
            {!editMode &&
            <div>
                <span onClick={activateEditMode}>{props.status || 'No status'}</span>

            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} value={status}/>
                <button onClick={deactivateEditMode}>Сохранить</button>
            </div>
            }
        </div>
    )

}


// console.log(document.querySelector('#inputs').value)
export default ProfileStatusWithHooks