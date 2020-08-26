import React from "react";
import s from './News.module.css';
import './../../Assets/Fonts/iconic/css/material-design-iconic-font.css';
import bg01 from '../../Assets/images/bg-01.jpg'
import './../../Assets/Fonts/fonts.css'
import {connect} from "react-redux";
import Preloader from "../Preloader/Preloader";
import {Redirect} from "react-router";



const News = (props) => {
function sayHi(props){
    return props.mynews.map(e=><div>
            <div><img src={e.img} width='300' height='180'/></div>
            <div><h2>{e.title}</h2></div>
            <div><p>{e.content}</p></div>
            <div> <h6>Дата создания: {e.date}</h6></div>
        </div>
    )
}
    function returnContent(props){
        if(props.mynews==undefined){
           return <Preloader/>

        }  return props.mynews.map(e=><div>
                <div><img src={e.img} width='300' height='180'/></div>
                <div><h2>{e.title}</h2></div>
                <div><p>{e.content}</p></div>
                <div> <h6>Дата создания: {e.date}</h6></div>
            </div>
        )

    }




  return (
      <div>

          <div className={s.content} style={{backgroundImage:`url(${bg01})`}}>
            <div className={s.grid}>
                {returnContent(props)}
            </div>

          </div>

      </div>

  )

}

const mapStateToProps=(store)=>(
{

    mynews:store.newsForNews.news
  }

)



export default connect(mapStateToProps,null)(News);



