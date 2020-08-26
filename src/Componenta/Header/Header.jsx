import React from "react";
import s from './Header.module.css';
import './../../Assets/Fonts/iconic/css/material-design-iconic-font.css';
import cart from '../../Assets/images/shopping-cart.svg'
import './../../Assets/Fonts/fonts.css'
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

import {addTokenLogout} from "../../Reducer/LoginReducer";
import Cartcontainer from "../Cart/Cartcontainer";


const Header = (props) => {
    let logoutFunction=()=>{
        localStorage.setItem('token', '');
        let logoutToken= localStorage.getItem('token');
        props.addTokenLogout(logoutToken);
    }

    return (
        <div className={s.header}>
            <div className={s.container}>
                <NavLink className={s.navlink} to='/'>Home</NavLink>
                <NavLink className={s.navlink} to='/profile'>Profile</NavLink>
                <NavLink className={s.navlink} to='/news'>News</NavLink>
                <NavLink className={s.navlink} to='/product'>Products</NavLink>
                {props.tokenAuth!=='' ? <a href='' style={{fontSize:'17px', color:'yellow', margin:'0 7px 0 7px'}} onClick={logoutFunction}>Logout</a> : <NavLink className={s.navlink} to='/login'>Login</NavLink>}
            </div>
            <div>
                <Cartcontainer/>
            </div>


        </div>
    )

}

const mapStateToProps = (state) => {

    return {
      tokenAuth:state.authReducerStore.authToken,
        statusTokenAuth: state.authReducerStore.status,
    }


}
export default connect(mapStateToProps, {addTokenLogout})(Header);



