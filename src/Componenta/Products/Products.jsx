import React from "react";
import s from './Products.module.css';
import './../../Assets/Fonts/iconic/css/material-design-iconic-font.css';
import bg01 from '../../Assets/images/bg-01.jpg'
import './../../Assets/Fonts/fonts.css'
import {connect} from "react-redux";
import {addForProduct} from "../../Reducer/ProductsReducer";



const Products = (props) => {


    const addCart=(idProduct)=>{
        props.addForProduct(idProduct)

    }





  return (
      <div>

          <div className={s.content} style={{backgroundImage:`url(${bg01})`}}>
              <div className={s.grid}>
                  {props.products.map(e=> <div>
                          <div><img src={e.img} width='300' height='180'/></div>
                          <div><h2>{e.title}</h2></div>
                          <div><h3>price: {e.price} uah</h3></div>
                      {e.quantityOfGoods>0 ? <button className={s.login100__form__btn} onClick={()=>{addCart(e.id)}}>
                         Добавлен в корзину
                      </button>:<button className={s.login100__form__btn} onClick={()=>{addCart(e.id)}}>
                          Добавить товар в корзину
                      </button>}

                      </div>
                  )}
              </div>

          </div>

      </div>

  )

}

const mapStateToProps=(state)=>{

  return{
      products:state.productForThisSite.product

  }


}
export default connect(mapStateToProps, {addForProduct})(Products);



