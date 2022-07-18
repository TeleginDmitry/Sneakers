import React from "react";
import SneakersItem from "../SneakersItem/SneakersItem";
import './SneakersList.css'

function SneakersList({addReviewsSneaker, sneakerLikeStorage, sneakers, setSneakers, counterMoney, resetValueAddStorage, sneakerAddStorage, resetValueLikeStorage}) {
    return (
        <div className="sneakers__list">
            {sneakers.map((sneaker, index) => {
                return <SneakersItem addReviewsSneaker={addReviewsSneaker} sneakerLikeStorage={sneakerLikeStorage} resetValueLikeStorage={resetValueLikeStorage} sneakerAddStorage={sneakerAddStorage} resetValueAddStorage={resetValueAddStorage}  counterMoney={counterMoney} sneakers={sneakers} index={index} sneaker={sneaker} setSneakers={setSneakers} key={sneaker.id}></SneakersItem>
            })}
        </div>
    )
}



export default SneakersList