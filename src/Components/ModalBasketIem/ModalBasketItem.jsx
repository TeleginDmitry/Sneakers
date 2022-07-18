import React, { useEffect, useState } from "react";
import './ModalBasketItem.css'
import img from '../../Img/Icon-skin/5.jpg'
import useLocalStorage from "../../Hooks/useLocalStorage";

function ModalBasketItem({ desc, price, sneaker, setPriceSneaker, setSneakerAddStorage, sneakerAddStorage }) {
    
    const deleteSneakerModal = (sneaker) => {
        setSneakerAddStorage(sneakerAddStorage.filter((el) => el.id !== sneaker.id))
    }

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
                <button className="sneaker__basket_close" onClick={() => {
                    setPriceSneaker((money) => money -= +sneaker.price)
                    deleteSneakerModal(sneaker)
                }}>
                    <img src={img} alt="" />
                </button>
            </div>
        </div>
    )
}



export default ModalBasketItem