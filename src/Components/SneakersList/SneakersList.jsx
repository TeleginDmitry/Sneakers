import React from "react";
import SneakersItem from "../SneakersItem/SneakersItem";
import './SneakersList.css'

function SneakersList({sneakers, setSneakers, countMoney, filterModalSneakers}) {
    return (
        <div className="sneakers__list">
            {sneakers.map((sneaker, index) => {
                return <SneakersItem  filterModalSneakers={filterModalSneakers} countMoney={countMoney} sneakers={sneakers} index={index} sneaker={sneaker} setSneakers={setSneakers} key={sneaker.id}></SneakersItem>
            })}
        </div>
    )
}



export default SneakersList