import React from "react";
import logo from '../../Img/header-logo/logo.png'
import basket from '../../Img/header-img/basket.png'
import like from '../../Img/header-img/like.png'
import profile from '../../Img/header-img/profile.png'
import { Link } from "react-router-dom";
import likeFull from '../../Img/Icon-skin/3.svg'
import './Header.css'

function Header({priceSneaker, setModal, sneakerLikeStorage}) {
    return (
        <header className="header">
            <div className="header__logo">
                <div className="header__img">
                    <Link to=''><img src={logo} alt="logo" /></Link>
                </div>
                <div className="header__sneakers">
                    <h1 className="header__title">REACT SNEAKERS</h1>
                    <p className="header__shop">Магазин лучших кроссовок</p>
                </div>
            </div>
            <div className="header__svg">
                <div className="header__basket">
                    <div className="header__img_basket" onClick={() => setModal((el) => el = !el)}>
                        <img className="svg" src={basket} alt="basket" />
                    </div>
                    <div className="header__price">
                        <p>{priceSneaker} руб</p>
                    </div>
                </div>
                <div className="header__likes">
                    <Link to='/favorite'><img className="svg" src={sneakerLikeStorage.length ? likeFull : like} alt="like" /></Link>
                </div>
                <div className="header__profile">
                    <Link to='purchases'><img className="svg" src={profile} alt="profile" /></Link>
                </div>
            </div>
        </header>
    )
}


export default Header

