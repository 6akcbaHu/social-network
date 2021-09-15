import React, {useEffect, useState} from 'react';
import s from './ProfileIStatus.module.css'

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
                <input className={s.input} onChange={onStatusChange} maxlength='90' value={status}/>
                <button className={s.btn} onClick={deactivateEditMode}>save</button>
            </div>
            }
        </div>
    )

}

export default ProfileStatusWithHooks