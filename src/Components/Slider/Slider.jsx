import React, { useState } from "react";
import ButtonLeft from "../../UI/ButtonSlider/ButtonLeft/ButtonLeft";
import ButtonRigth from "../../UI/ButtonSlider/ButtonRigth/ButtonRigth";
import './Slider.css'

const Slider = () => {
    const [sliderItem, setSliderItem] = useState([{logo: '', desc: '', img: '', }])
    const [transition, setTransition] = useState(0)
    const maxTransitionButtonRigth = -960 * 2

    const buttonClickLeft = () => {
        if (transition !== 0) {
            setTransition((el) => el += 960)
        }
    }
    const buttonClickRigth = () => {
        if (transition !== maxTransitionButtonRigth) {
            setTransition((el) => el -= 960)
        }
    }

    return (
        <div className="slider">
            {transition === 0 ? <ButtonLeft style={{visibility: 'hidden'}} onClick={() => buttonClickLeft()}></ButtonLeft> : <ButtonLeft onClick={() => buttonClickLeft()}></ButtonLeft>}
            <div className="slider__window">
                <div className="slider__list" style={{transform: `translateX(${transition}px)`}}>
                    <div className="slider__item item1">page 1</div>
                    <div className="slider__item item2">page 2</div>
                    <div className="slider__item item3">page 3</div>
                </div>
            </div>
            {transition === maxTransitionButtonRigth ? <ButtonRigth style={{visibility: 'hidden'}} onClick={() => buttonClickRigth()}></ButtonRigth> : <ButtonRigth onClick={() => buttonClickRigth()}></ButtonRigth>}
        </div>
    )
}




export default Slider