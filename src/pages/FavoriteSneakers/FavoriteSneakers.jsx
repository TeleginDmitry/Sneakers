import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import FavoriteSneakerItem from "../../Components/FavoriteSneakerItem/FavoriteSneakerItem";
import SneakersItem from "../../Components/SneakersItem/SneakersItem";
import ButtonArrow from "../../UI/Button/ButtonArrow/ButtonArrow";
import {Link} from 'react-router-dom'
import './FavoriteSneakers.css'
import sad from '../../Img/LovedSneakers/sad.png'
import Button from "../../UI/Button/Button";

const FavoriteSneakers = ({sneakerLikeStorage, counterMoney, resetValueAddStorage, sneakerAddStorage, resetValueLikeStorage}) => {
    return (
        <nav className="favorite">
            {sneakerLikeStorage.length ? <div className="favorite__wrapper">
            <div className="favorite__titles">
                <Link to={-1}><ButtonArrow></ButtonArrow></Link>
                <h1 className="favorite__title">Мои закладки</h1>
            </div>

            <TransitionGroup className="favorite__list_sneaker">
                {sneakerLikeStorage.map((sneaker) => {
                    return <CSSTransition key={sneaker.id} timeout={300} classNames='favorite'>
                        <FavoriteSneakerItem resetValueLikeStorage={resetValueLikeStorage} sneakerLikeStorage={sneakerLikeStorage} sneakerAddStorage={sneakerAddStorage} resetValueAddStorage={resetValueAddStorage} counterMoney={counterMoney} sneaker={sneaker}></FavoriteSneakerItem>
                    </CSSTransition>
                })}
            </TransitionGroup>
        </div> : 
            <div className="fovorite__no-order">
                <img src={sad} alt="" />
                <h1>Закладок нет :(</h1>
                <p>Вы ничего не добавляли в закладки</p>
                <Link to={-1}><Button>Вернуться назад</Button></Link>
            </div>}
        </nav>
    )
}


export default FavoriteSneakers