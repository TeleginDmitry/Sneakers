import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import ModalBasket from "./Components/Modal/ModalBasket";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";

function App() {
  const [money, setMoney] = useState(0)
  const [modalSneakers, setModalSneakers] = useState([])
  const [modal, setModal] = useState(false)

  
  const countMoney = (classesAdd, price) => {
    if (classesAdd) {
      return setMoney((el) => el -= +price);
    }
    
    return setMoney((el) => el += +price);
  }
  
  const filterModalSneakers = (sneaker, classesAdd) => {
    if (classesAdd) {
      return setModalSneakers(modalSneakers.filter((el) => el.id !== sneaker.id))
    }
    setModalSneakers([...modalSneakers, sneaker])
  }

  const removeModalSneakers = (sneaker) => {
    setModalSneakers((sneak) => {
      return sneak.filter((el) => el.id !== sneaker.id)
    })
  
  }



  return (
    <div className="contain">
      <ModalBasket money={money} setMoney={setMoney} removeModalSneakers={removeModalSneakers} setModal={setModal} modal={modal} modalSneakers={modalSneakers}></ModalBasket>


      <BrowserRouter>
        <Header setModal={setModal} money={money}></Header>

        <section className="page">
          <Routes>
            <Route path="" element={<Home modalSneakers={modalSneakers} removeModalSneakers={removeModalSneakers} countMoney={countMoney} filterModalSneakers={filterModalSneakers}></Home>}></Route>
            <Route path="*" element={<Error></Error>}></Route>
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
