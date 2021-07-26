import React from "react";
import s from "./Login.Module.css"
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {

    return (
        <div className={s.login}>
            <form onSubmit={props.handleSubmit} className={s.login__form}>
                <div className={s.login__item}>
                    <Field placeholder={"login"} name={"login"} component={"input"}/>
                </div>
                <div className={s.login__item}>
                    <Field placeholder={"Password"} name={"password"} component={"input"}/>
                </div>
                <div className={s.checkbox}>
                    <Field  component={"input"} name={"remember me"} type={"checkbox"}/><span>remember me</span>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>

    )
}
const LoginRedaxForm=reduxForm({form:'login'})(LoginForm)
const Login = (props) => {
    const onSubmit=(formData)=>{
console.log(formData)
    }
    return (
        <div className={s.login}>
            <LoginRedaxForm onSubmit={onSubmit}/>
        </div>

    )
}
// const LoginReduxForm=reduxForm({
// form:'login'
// })(ContactForm)
export default Login
