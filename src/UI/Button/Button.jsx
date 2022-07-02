import React from "react";
import './Button.css'
import arrow from '../../Img/Modal-img/arrow.png'

const Button = (props) => {
    return (
        <button className="button" {...props}><img className="button__img" src={arrow} alt=""></img>{props.children}</button>
    )
}


export default Button