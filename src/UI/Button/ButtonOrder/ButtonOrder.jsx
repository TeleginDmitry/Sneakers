import React from "react";
import './ButtonOrder.css'
import arrow from '../../../Img/Modal-img/arrow.png'

const ButtonOrder = (props) => {
    return (
        <button className="ButtonOrder" {...props}>{props.children} <img src={arrow} alt="" /></button>
    )
}

export default ButtonOrder