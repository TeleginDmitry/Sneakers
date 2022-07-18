import React from "react";
import ModalList from "../ModalList/ModalList";
import './ModalBasket.css'
import box from '../../Img/Modal-img/box.jpg'
import Button from "../../UI/Button/Button";
import ButtonOrder from "../../UI/Button/ButtonOrder/ButtonOrder";
import { Link } from "react-router-dom";
import ButtonArrow from "../../UI/Button/ButtonArrow/ButtonArrow";

function ModalBasket({ modalSneakers, modal, setModal, setSneakerAddStorage, priceSneaker,setPriceSneaker,  sneakerAddStorage }) {

    return (
        <div className={modal ? 'modal modal__active' : 'modal'} onClick={() => setModal(false)}>
            <div className="modal__content" onClick={(el) => el.stopPropagation()}>
                <div className="modal__titles">
                    <ButtonArrow onClick={() => setModal(false)}></ButtonArrow>
                    <h1 className="modal__title">Корзина</h1>
                </div>
                {modalSneakers.length ? 
                <div className="modal__wrapper"> 
                    <div className="modal__list">
                        <ModalList setPriceSneaker={setPriceSneaker} sneakerAddStorage={sneakerAddStorage} setSneakerAddStorage={setSneakerAddStorage}  modalSneakers={modalSneakers}></ModalList> 
                    </div>
                    <div className="modal__result">
                        <div className="modal__total">
                            <p>Итого:</p>
                            <span className="line"></span>
                            <span className="modal__money">{priceSneaker + Math.ceil((priceSneaker / 100)) * 5} руб.</span>
                        </div>
                        <div className="modal__tax">
                            <p>Налог 5%:</p>
                            <span className="line"></span>
                            <span className="modal__money">{Math.ceil((priceSneaker / 100) * 5)} руб.</span>
                        </div>
                        <Link to='/form'><ButtonOrder onClick={() => setModal(false)}>Оформить заказ</ButtonOrder></Link>
                    </div>
                </div>
                
                    :
                <div className="modal__emptiness">
                    <img className="modal__modal__emptiness_img" src={box} alt="" />
                    <h1>Корзина пустая</h1>
                    <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                    <Button onClick={() => setModal(false)}>Вернуться назад</Button>
                </div>
                }
            </div>
        </div>
    )
}


export default ModalBasket