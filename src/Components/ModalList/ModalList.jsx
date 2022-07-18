import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import useLocalStorage from "../../Hooks/useLocalStorage";
import ModalBasketItem from "../ModalBasketIem/ModalBasketItem";
import './ModalList.css'

function ModalList({modalSneakers, setSneakerAddStorage, sneakerAddStorage, setPriceSneaker}) {

    return (
        <TransitionGroup>
            {modalSneakers.map((sneaker) => {
                return <CSSTransition key={sneaker.id} timeout={300} classNames='sneaker'>
                    <ModalBasketItem sneakerAddStorage={sneakerAddStorage} setSneakerAddStorage={setSneakerAddStorage} setPriceSneaker={setPriceSneaker} sneaker={sneaker} desc={sneaker.desc} price={sneaker.price}></ModalBasketItem>
                </CSSTransition>
            })}
        </TransitionGroup>
    )
}


export default ModalList