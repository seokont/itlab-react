import React from "react";
import s from './Cart.module.css';
import './../../Assets/Fonts/iconic/css/material-design-iconic-font.css';
import bg01 from '../../Assets/images/bg-01.jpg'
import './../../Assets/Fonts/fonts.css'
import {connect} from "react-redux";
import cart from "../../Assets/images/shopping-cart.svg";
import Cart from "./Cart";


const Cartcontainer = (props) => {

    let f = props.product.map((f) => {
            let totalMas = 0;
            return totalMas += Number(f.quantityOfGoods);
        }
    )
    let sum = 0;
    f.forEach(
        function sumNumber(currentValue) {
            sum += currentValue;
        }
    );

    return (
        <Cart f={sum}/>
    )
}

const mapStateToProps = (state) => {

    return {
        product: state.productForThisSite.product

    }


}
export default connect(mapStateToProps, null)(Cartcontainer);



