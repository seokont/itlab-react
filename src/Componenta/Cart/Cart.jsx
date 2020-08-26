import React from "react";
import s from './Cart.module.css';
import './../../Assets/Fonts/iconic/css/material-design-iconic-font.css';

import './../../Assets/Fonts/fonts.css'

import cart from "../../Assets/images/shopping-cart.svg";


const Cart = (props) => {

    return (
        <div>
            <div>
                <div className={s.price}>{props.f} {props.f > 0 &&
                <span style={{fontSize: '15px'}}>'Items in the basket'</span>}</div>
                <img className={s.img} src={cart} width='60'/>
            </div>
        </div>

    )

}


export default Cart;



