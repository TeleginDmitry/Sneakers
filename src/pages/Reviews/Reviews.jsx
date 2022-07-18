import React from 'react'
import { Link } from 'react-router-dom'
import ButtonArrow from '../../UI/Button/ButtonArrow/ButtonArrow'
import './Reviews.css'

export default function Reviews({reviewsSneaker, reviewsStorage}) {
  return (
    <div>
      <div className='reviews__title'>
        <Link to={-1}><ButtonArrow></ButtonArrow></Link>
        <h1>Отзывы</h1>
      </div>

      <div className='reviews__body'>
        <p>{reviewsStorage.find((el) => el.id === reviewsSneaker)?.comment ? <>
          <span>1. </span>
          {reviewsStorage.find((el) => el.id === reviewsSneaker).comment}
        </>: 'Отзывов о данном товаре нет'}</p>
      </div>
    </div>
  )
}
