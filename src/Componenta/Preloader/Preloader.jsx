import React from "react";
import s from './Preloader.module.css';
import './../../Assets/Fonts/iconic/css/material-design-iconic-font.css';
import bg01 from '../../Assets/images/bg-01.jpg'
import './../../Assets/Fonts/fonts.css'
import {connect} from "react-redux";
import preloader from './../../Assets/images/preloader.svg'


const Preloader = (props) => {

    return (
        <div>

            <img src={preloader}/>

        </div>

    )

}

const mapStateToProps = (state) => {

    return {}


}
export default connect(mapStateToProps, null)(Preloader);



