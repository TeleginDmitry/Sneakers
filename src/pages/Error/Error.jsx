import React from "react";
import img from '../../Img/Smiley/sadness.png'
import './Error.css'

function Error() {
    return (
        <div className="error">
            <p>Не удалось найти страницу по вашему запросу</p>
            <img src={img} alt="sadness" />
        </div>
    )
}



export default Error