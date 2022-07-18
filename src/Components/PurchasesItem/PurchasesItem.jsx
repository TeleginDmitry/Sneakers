import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import img3 from '../..//Img/Icon-skin/3.svg'
import img4 from '../..//Img/Icon-skin/4.png'
import './PurchasesItem.css'

function PurchasesItem(props) {
    const [clickReviews, setClickReviews] = useState(false)
    const [countSymbol, setCountSymbol] = useState(0)

    const [formatTextarea, setFormatTextarea] = useState(false)

    const [checkReview, setCheckReview] = useState(false)
    const [textareaValue, setTextareaValue] = useState()

    

    return (
        <div className={'sneaker__item'}>
            <div className="sneaker__sneaker">
                <img src={props.sneaker.logo} alt="" />
                <div className={props.sneakerLikeStorage.find((sneaker) => sneaker.id === props.sneaker.id) ? 'sneaker__like sneaker__like_active' : 'sneaker__like'} onClick={() => {
                    props.resetValueLikeStorage(props.sneaker)
                }}>
                    {props.sneakerLikeStorage.find((sneaker) => sneaker.id === props.sneaker.id) ? <img src={img3} alt="" /> : <img src={img4} alt="" />}
                </div>
            </div>
            <div className="sneaker__description">{props.sneaker.desc}</div>
            {props.reviewsStorage.find((el) => el.id === props.sneaker.id) ? 
                <div className="reviews">
                    <Link to='/reviews'><h2 onClick={() => props.addReviewsSneaker(props.sneaker.id)}  className="sneaker__title">Посмотреть отзывы</h2></Link>
                </div> :
                <form  onSubmit={(el) => {
                    el.preventDefault()
                    if (formatTextarea) {
                        props.addCommentSneaker(props.sneaker.id, textareaValue)
                    }
                }} className="form__reviews">
                    <p onClick={() => setClickReviews((el) => el = !el)} className="sneaker__title">{clickReviews ? 'Отменить' : 'Оставить отзыв'}</p>
                    <textarea  tabIndex='-1' onInput={(textarea) => {
                        if (textarea.target.value.length > 30) {
                            setFormatTextarea(true)
                            setTextareaValue(textarea.target.value)
                        }
                        setCountSymbol(+textarea.target.getAttribute('maxlength') - textarea.target.value.length)
                    }} onBlur={() => setCountSymbol(0)} className={clickReviews ? 'sneaker__input sneaker__input_active' : 'sneaker__input'} maxLength='260'></textarea>
                    {countSymbol ? <span className="count">{countSymbol}</span> : ''}
                    {clickReviews && 
                    <div className="form__submit">
                        <input type="submit" className="textarea__submit" placeholder="Отправить"></input>
                    </div>}
                </form>
            }
            <div className="sneaker__block_reviews">
                <div className="sneaker__price">
                    <p>Цена:</p>
                    <span>{props.sneaker.price} руб.</span>
                </div>

            </div>
        </div>
    )
}



export default PurchasesItem











