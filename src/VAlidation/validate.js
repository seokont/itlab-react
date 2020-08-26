import React from "react";
import s from './validform.module.css';
import {Field, reduxForm} from "redux-form";





export const Inputlogin = ({input, meta, ...props}) => {
    let errorHach = meta.touched && meta.error;
    return (
        <div
            className={s.wrap__input100 + ' ' + s.validate__input}
            data-validate="Enter username">
            {errorHach ? <input {...input} {...props} className={s.input100__error} validate={[requirefield]}
                                placeholder='Please fill in this field'/> :
                <input {...input} {...props} className={s.input100} validate={[requirefield]} placeholder='Username'/>}
            {errorHach ? <span className={s.focus__input100__error} data-placeholder="&#xf119;"></span> :
                <span className={s.focus__input100} data-placeholder="&#xf207;"></span>}

        </div>
    )
}


export const Inputpassword = ({input, meta, ...props}) => {
    let errorHach = meta.touched && meta.error;
    return (
        <div
            className={s.wrap__input100 + ' ' + s.validate__input}
            data-validate="Enter password">
            {errorHach ? <input {...input} {...props} className={s.input100__error} validate={[requirefield]}
                                placeholder='Please fill in this field'/> :
                <input {...input} {...props} className={s.input100} validate={[requirefield]} placeholder='Password'/>}
            {errorHach ? <span className={s.focus__input100__error} data-placeholder="&#xf119;"></span> :
                <span className={s.focus__input100} data-placeholder="&#xf191;"></span>}
        </div>
    )
}


export const requirefield = value => !value ? 'Заполните все поля!' : undefined;


export const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined