import React from "react";
import s from './Home.module.css';
import './../../Assets/Fonts/iconic/css/material-design-iconic-font.css';
import bg01 from '../../Assets/images/bg-01.jpg'
import './../../Assets/Fonts/fonts.css'
import {connect} from "react-redux";



const Home = (props) => {

  return (
      <div>

          <div className={s.content} style={{backgroundImage:`url(${bg01})`}}>
<h1>Welcome to the home page</h1>

          </div>

      </div>

  )

}

const mapStateToProps=(state)=>{

  return{


  }


}
export default connect(mapStateToProps,null)(Home);



