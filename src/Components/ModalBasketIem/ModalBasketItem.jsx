import React, { useEffect, useState } from "react";
import './ModalBasketItem.css'
import img from '../../Img/Icon-skin/5.jpg'

function ModalBasketItem({ desc, price, sneaker, removeModalSneakers, setMoney }) {


    return (
        <div className="basket">
            <div className="sneaker__basket_item">
                <div className="sneaker__sneaker">
                    <img src={sneaker.logo} alt="" />
                </div>
                <div className="sneaker__basket_description">
                    <p>{desc}</p>
                    <div className="sneaker__basket_price">
                        <span>{price} руб.</span>
                    </div>
                </div>
                <div className="sneaker__basket_close" onClick={() => {
                    removeModalSneakers(sneaker)
                    setMoney((el) => el = el - sneaker.price)
                }}>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}



export default ModalBasketItem