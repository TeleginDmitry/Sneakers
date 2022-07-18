import React from "react";
import './ButtonArrow.css'

const ButtonArrow = (props) => {
    return (
        <button className="button__arrow" {...props}>{'<'}</button>
    )
}


export default ButtonArrow