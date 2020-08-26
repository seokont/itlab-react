import React from "react";
import s from './Profile.module.css';
import './../../Assets/Fonts/iconic/css/material-design-iconic-font.css';
import bg01 from '../../Assets/images/bg-01.jpg'
import './../../Assets/Fonts/fonts.css'
import {connect} from "react-redux";
import {Redirect} from "react-router";



const Profile = (props) => {
// if(props.tokenAuth)
  return (<>

      {props.tokenAuth ?  <div>

          <div className={s.content} style={{backgroundImage:`url(${bg01})`}}>
              <div className={s.grid}>
                 <h2>Здесь профайл</h2>
              </div>
          </div>
      </div> : <Redirect to='/login'/>}

  </>
  )

}

const mapStateToProps=(state)=>{

  return{
      tokenAuth:state.authReducerStore.authToken

  }


}
export default connect(mapStateToProps,null)(Profile);



