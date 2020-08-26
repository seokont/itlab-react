import React from 'react';

import './App.css';
import Loginconteiner from "./Componenta/Login/Login";
import { Route, Switch } from "react-router";
import News from "./Componenta/News/News";
import Home from "./Componenta/Home/Home";
import Profile from "./Componenta/Profile/Profile";
import Header from "./Componenta/Header/Header";
import Products from "./Componenta/Products/Products";
import {connect} from "react-redux";
import {addForProduct} from "./Reducer/ProductsReducer";
import Preloader from "./Componenta/Preloader/Preloader";

function App(props) {
  return (<>
<Header/>

      <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/news">
              {props.mynews ? <News/>:<Preloader/>}
          </Route>

          <Route path="/profile">
              <Profile/>
          </Route>
          <Route path="/login">
              <Loginconteiner/>
          </Route>
          <Route path="/product">
              {props.products ? <Products/>:<Preloader/>}

          </Route>

      </Switch>


</>

  );
}


const mapStateToProps=(state)=>{

    return{
        products:state.productForThisSite.product,
        mynews:state.newsForNews.news

    }


}
export default connect(mapStateToProps, {addForProduct})(App);



