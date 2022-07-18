import React from "react";
import ButtonArrow from "../../UI/Button/ButtonArrow/ButtonArrow";
import {Link} from 'react-router-dom'
import './Purchases.css'
import PurchasesItem from "../../Components/PurchasesItem/PurchasesItem";

const Purchases = ({addReviewsSneaker, reviewsStorage, addCommentSneaker, purchase, addLovedSneaker, resetValueLikeStorage, sneakerLikeStorage}) => {
    return (
        <div className="purchases">
            <div className="purchases__titles">
                <Link to={-1}><ButtonArrow></ButtonArrow></Link>
                <h1 className="purchases__title">Мои покупки</h1>
            </div>
            <div className="purchases__list">
                {purchase.length ? purchase.map((sneaker, index) => {
                    return <PurchasesItem addReviewsSneaker={addReviewsSneaker} reviewsStorage={reviewsStorage} addCommentSneaker={addCommentSneaker} sneakerLikeStorage={sneakerLikeStorage} resetValueLikeStorage={resetValueLikeStorage} addLovedSneaker={addLovedSneaker} key={index} desc={sneaker.desc} sneaker={sneaker}></PurchasesItem>
                }) : <p className="purchases__error">Вы не сделали ни одну покупку</p>}
                
            </div>
        </div>
    )
}



export default Purchases