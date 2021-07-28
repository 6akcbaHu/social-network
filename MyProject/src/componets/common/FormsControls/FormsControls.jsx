import React from "react";
import s from "./FormsControls.module.css"

export const FormControl = ({input, meta, ...props}) => {
    const showError = meta.touched && meta.error
    return (
        <div className={s.formControl + ' ' + (showError ? s.error : '')}>
            {props.children}
            {showError && <span>{meta.error}</span>}
        </div>
    )
}
export const Textarea = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea {...input}{...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input {...input}{...restProps}/></FormControl>

}