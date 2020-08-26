import React, {useEffect, useState} from "react";
import s from './Login.module.css';
import './../../Assets/Fonts/iconic/css/material-design-iconic-font.css';
import bg01 from './../../Assets/images/bg-01.jpg'
import './../../Assets/Fonts/fonts.css'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {addForReducerThunk, addTokenSiteAuth} from "../../Reducer/LoginReducer";
import {Redirect} from "react-router";
import {Inputlogin, Inputpassword, requirefield} from "../../VAlidation/validate";
import Preloader from "../Preloader/Preloader";


const Loginconteiner = (props) => {


    useEffect(
        () => {
            props.addTokenSiteAuth(localStorage.getItem('token'))
        },
        [props.tokenAuth],
    );

    const submit = (value) => {
        props.addForReducerThunk(value.username, value.password);
    }


    return (
        <>

            {props.tokenAuth != '' ? <Redirect to='/profile'/> :
                <Login onSubmit={submit} tokenAuth={props.tokenAuth} statusTokenAuth={props.statusTokenAuth}/>}
        </>
    )

}

let Login = (props) => {

    const {handleSubmit} = props;

    return (
        <div>
            <div className={s.limiter}>
                <div className={s.container__login100} style={{backgroundImage: `url(${bg01})`}}>
                    <div className={s.wrap__login100}>
                        <form className={s.login100__form} onSubmit={handleSubmit}>
					<span className={s.login100__form__logo}>
						<i className="zmdi zmdi-landscape"></i>
					</span>
                            <span className={s.login100__form__title + ' ' + s.p__b__34 + ' ' + s.p__t__27}>
						Log in
					</span>
                            <Field className={s.input100} name="username" type="text" component={Inputlogin}
                                   validate={[requirefield]}
                            />

                            <Field className={s.input100} type="password" name="password" component={Inputpassword}
                                   validate={[requirefield]}
                                   placeholder="Password"/>

                            {props.statusTokenAuth == 1 ?
                                <div style={{textAlign: 'center', color: 'red'}}>Incorrectly entered username or
                                    password</div> : undefined}

                            <div className={s.container__login100__form__btn}>
                                {props.statusTokenAuth  ? <Preloader/> :
                                    <button className={s.login100__form__btn}>
                                        Login
                                    </button>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {

    return {
        tokenAuth: state.authReducerStore.authToken,
        statusTokenAuth: state.authReducerStore.status,
    }
}
export default connect(mapStateToProps, {addForReducerThunk, addTokenSiteAuth})(Loginconteiner);

Login = reduxForm({
    form: 'login'
})(Login)