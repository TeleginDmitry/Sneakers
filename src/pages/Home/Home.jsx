import React, { useState } from "react";
import SneakersList from "../../Components/SneakersList/SneakersList";
import Input from "../../UI/Input/Input";
import './Home.css'

import img1 from '../../Img/Sneakers/1.jpg'
import img2 from '../../Img/Sneakers/2.jpg'
import img3 from '../../Img/Sneakers/3.jpg'
import img4 from '../../Img/Sneakers/4.jpg'
import img5 from '../../Img/Sneakers/5.jpg'
import img6 from '../../Img/Sneakers/6.jpg'
import img7 from '../../Img/Sneakers/7.jpg'
import img8 from '../../Img/Sneakers/8.jpg'
import img9 from '../../Img/Sneakers/9.jpg'
import img10 from '../../Img/Sneakers/10.jpg'
import { useSortedSneaker } from "../../Hooks/useSortedSneaker";

function Home({countMoney, filterModalSneakers}) {
    const [sneakers, setSneakers] = useState([
        {id: 1, logo: img1, desc: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '12999'},
        {id: 2, logo: img2, desc: 'Мужские Кроссовки Nike Air Max 270', price: '12999'},
        {id: 3, logo: img3, desc: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '8499'},
        {id: 4, logo: img4, desc: 'Кроссовки Puma X Aka Boku Future Rider', price: '8900'},
        {id: 5, logo: img5, desc: 'Мужские Кроссовки Under Armour Curry 8', price: '10000'},
        {id: 6, logo: img6, desc: 'Мужские Кроссовки Nike Kyrie 7', price: '6000'},
        {id: 7, logo: img7, desc: 'Мужские Кроссовки Jordan Air Jordan 11', price: '9999'},
        {id: 8, logo: img8, desc: 'Мужские Кроссовки Nike LeBron XVIII', price: '11000'},
        {id: 9, logo: img9, desc: 'Мужские Кроссовки Nike Lebron XVIII Low', price: '13999'},
        {id: 10, logo: img10, desc: 'Мужские Кроссовки Nike Kyrie Flytrap IV', price: '9900'},
        
        
    ])



    const [sorted, setSorted] = useState('')

    const filterSneaker = useSortedSneaker(sneakers, sorted)
    return (
        <div className="sneakers">
            <div className="sneakers__block">
                <h1 className="sneakers__title">Все кроссовки</h1>
                <Input onChange={(input) => setSorted(input.target.value)} placeholder='Поиск...'></Input>
            </div>
            <div className="sneakers__shop">
                <SneakersList filterModalSneakers={filterModalSneakers} countMoney={countMoney} sneakers={filterSneaker} setSneakers={setSneakers}></SneakersList>
            </div>
        </div>
    )
}



export default Home