import React, { useEffect, useState } from "react";
import img1 from '../../Img/Icon-skin/1.svg'
import img2 from '../../Img/Icon-skin/2.svg'
import img3 from '../../Img/Icon-skin/3.svg'
import img4 from '../../Img/Icon-skin/4.png'
import './FavoriteSneakerItem.css'

function FavoriteSneakerItem({resetValueLikeStorage, sneakerLikeStorage, counterMoney, sneaker, resetValueAddStorage, sneakerAddStorage}) {
    

    return (
        <div className={sneakerAddStorage.find((el) => el.id === sneaker.id) ? 'favorite__sneaker sneaker__item_active' : 'favorite__sneaker'}>
            <div className="sneaker__sneaker">
                <img src={sneaker.logo} alt="" />
                <div onClick={() => {
                    resetValueLikeStorage(sneaker)
                }} className={sneakerLikeStorage.find((sneaker) => sneaker.id === sneaker.id) ? 'sneaker__like sneaker__like_active' : 'sneaker__like'}>
                    {sneakerLikeStorage.find((sneaker) => sneaker.id === sneaker.id) ? <img src={img3} alt="" /> : <img src={img4} alt="" />}
                </div>
            </div>
            <div className="sneaker__description">{sneaker.desc}</div>
            <div className="sneaker__block">
                <div className="sneaker__price">
                    <p>Цена:</p>
                    <span>{sneaker.price} руб.</span>
                </div>
                <div className={sneakerAddStorage.find((el) => el.id === sneaker.id) ? 'sneaker__add sneaker__add_active' : 'sneaker__add'} onClick={() => {
                    counterMoney(sneaker)
                    resetValueAddStorage(sneaker)
                }}>
                    {sneakerAddStorage.find((el) => el.id === sneaker.id) ? <img src={img2} alt="" /> : <img src={img1} alt="" />}
                </div>
            </div>
        </div>
    )
}



export default FavoriteSneakerItem