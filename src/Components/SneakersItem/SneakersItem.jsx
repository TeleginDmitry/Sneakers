import React, { useEffect, useState } from "react";
import './SneakerItem.css'
import img1 from '../..//Img/Icon-skin/1.svg'
import img2 from '../..//Img/Icon-skin/2.svg'
import img3 from '../..//Img/Icon-skin/3.svg'
import img4 from '../..//Img/Icon-skin/4.png'
import {Link} from 'react-router-dom'


function SneakersItem(props) {


    return (
        <div className={props.sneakerAddStorage.find((sneaker) => sneaker.id === props.sneaker.id) ? 'sneaker__item sneaker__item_active' : 'sneaker__item'}>
            <div className="sneaker__sneaker">
                <img src={props.sneaker.logo} alt="" />
                <div className={props.sneakerLikeStorage.find((sneaker) => sneaker.id === props.sneaker.id) ? 'sneaker__like sneaker__like_active' : 'sneaker__like'} onClick={() => {
                    props.resetValueLikeStorage(props.sneaker)
                    
                }}>
                    {props.sneakerLikeStorage.find((sneaker) => sneaker.id === props.sneaker.id) ? <img src={img3} alt="" /> : <img src={img4} alt="" />}
                </div>
            </div>
            <div className="sneaker__description">{props.sneaker.desc}</div>
            <div className="reviews">
                <Link to='/reviews'><h2 onClick={() => props.addReviewsSneaker(props.sneaker.id)} className="sneaker__title">Посмотреть отзывы</h2></Link>
            </div>
            <div className="sneaker__block">
                <div className="sneaker__price">
                    <p>Цена:</p>
                    <span>{props.sneaker.price} руб.</span>
                </div>
                <div className={props.sneakerAddStorage.find((sneaker) => sneaker.id === props.sneaker.id) ? 'sneaker__add sneaker__add_active' : 'sneaker__add'} onClick={(sneaker) => {
                    props.counterMoney(props.sneaker)
                    props.resetValueAddStorage(props.sneaker)
                }}>
                    {props.sneakerAddStorage.find((sneaker) => sneaker.id === props.sneaker.id) ? <img src={img2} alt="" /> : <img src={img1} alt="" />}
                </div>
            </div>
        </div>
    )
}



export default SneakersItem