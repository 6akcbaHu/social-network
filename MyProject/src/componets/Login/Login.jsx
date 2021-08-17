import React from "react";
import s from "./Login.Module.css"
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../common/Validators/validator";
import {connect} from "react-redux";
import {login} from "../../redux/reducerAuth";
import {Redirect} from "react-router-dom";
import f from "../common/FormsControls/FormsControls.module.css"
import {isAuthSelector} from "../selectors/authSelectors";


const LoginForm = (props) => {

    return (
        <div className={s.login}>
            <form onSubmit={props.handleSubmit} className={s.login__form}>
                <div className={s.login__item}>
                    <Field placeholder={"login"} name={"email"} component={Input} validate={[required]}/>
                </div>
                <div className={s.login__item}>
                    <Field placeholder={"Password"} type={"password"} name={"password"} component={Input}
                           validate={[required]}/>
                </div>
                {props.error && <div className={f.formControl}>{props.error}</div>}
                <div className={s.checkbox}>
                    <Field component={Input} name={"remember me"} type={"checkbox"}/><span>remember me</span>
                </div>
                {props.captchaUrl && <img src={props.captchaUrl} alt=""/>}
                {props.captchaUrl && <Field  name={"captcha"} component={Input} validate={[required]}/>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>

    )
}
const LoginRedaxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {

        props.login(formData.email, formData.password, formData.rememberMe,formData.captcha)

    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div className={s.login}>
            <LoginRedaxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>

    )
}
let mapStateToProps = (state) => {

    return {

        captchaUrl: state.auth.captchaUrl,
        isAuth: isAuthSelector(state)
    }

}
export default connect(mapStateToProps, {login})(Login)
