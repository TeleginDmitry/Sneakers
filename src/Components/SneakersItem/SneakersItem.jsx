import React, { useEffect, useState } from "react";
import './SneakerItem.css'
import img1 from '../..//Img/Icon-skin/1.svg'
import img2 from '../..//Img/Icon-skin/2.svg'
import img3 from '../..//Img/Icon-skin/3.svg'
import img4 from '../..//Img/Icon-skin/4.png'

function SneakersItem(props) {
    const [classesLike, setClassesLike] = useState(false)
    const [classesAdd, setClassesAdd] = useState(false)

    
    useEffect(() => {console.log('fff')}, [props.sneakers[props.index]])


    return (
        <div className={classesAdd ? 'sneaker__item sneaker__item_active' : 'sneaker__item'}>
            <div className="sneaker__sneaker">
                <img src={props.sneaker.logo} alt="" />
                <div className={classesLike ? 'sneaker__like sneaker__like_active' : 'sneaker__like'} onClick={() => {
                    setClassesLike((el) => el = !el)
                }}>
                    {classesLike ? <img src={img3} alt="" /> : <img src={img4} alt="" />}
                </div>
            </div>
            <div className="sneaker__description">{props.sneaker.desc}</div>
            <div className="sneaker__block">
                <div className="sneaker__price">
                    <p>Цена:</p>
                    <span>{props.sneaker.price} руб.</span>
                </div>
                <div className={classesAdd ? 'sneaker__add sneaker__add_active' : 'sneaker__add'} onClick={() => {
                    props.countMoney(classesAdd, props.sneaker.price)
                    props.filterModalSneakers(props.sneaker, classesAdd)
                    setClassesAdd((el) => el = !el)

                }}>
                    {classesAdd ? <img src={img2} alt="" /> : <img src={img1} alt="" />}
                </div>
            </div>
        </div>
    )
}



export default SneakersItem