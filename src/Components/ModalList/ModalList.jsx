import React from "react";
import ModalBasketItem from "../ModalBasketIem/ModalBasketItem";


function ModalList({modalSneakers, removeModalSneakers, setMoney}) {
    return (
        modalSneakers.map((sneaker) => {
            return <ModalBasketItem setMoney={setMoney} removeModalSneakers={removeModalSneakers} sneaker={sneaker} key={sneaker.id} desc={sneaker.desc} price={sneaker.price}></ModalBasketItem>
        })
    )
}


export default ModalList