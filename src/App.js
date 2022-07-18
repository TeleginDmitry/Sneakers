import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ModalBasket from "./Components/Modal/ModalBasket";
import Slider from "./Components/Slider/Slider";
import useLocalStorage from "./Hooks/useLocalStorage";
import Error from "./pages/Error/Error";
import FavoriteSneakers from "./pages/FavoriteSneakers/FavoriteSneakers";
import Home from "./pages/Home/Home";
import Purchases from "./pages/Purchases/Purchases";
import Reviews from "./pages/Reviews/Reviews";
import SneakerForm from "./pages/SneakerForm/SneakerForm";
import ThanksForPurchase from "./pages/ThanksForPurchase/ThanksForPurchase";

function App() {
  const [modalSneakers, setModalSneakers] = useState([]);
  const [modal, setModal] = useState(false);


  const [sneakerLikeStorage, setSneakerLikeStorage] = useLocalStorage(
    "Loved",
    []
  );

  const resetValueLikeStorage = (sneaker) => {
    const find = sneakerLikeStorage.find((el) => el.id === sneaker.id);
    if (!find) {
      return setSneakerLikeStorage([...sneakerLikeStorage, sneaker]);
    }
    setSneakerLikeStorage(
      sneakerLikeStorage.filter((el) => el.id !== sneaker.id)
    );
  };

  

  const [sneakerAddStorage, setSneakerAddStorage] = useLocalStorage(
    "Basket",
    []
  );

  const resetValueAddStorage = (sneaker) => {
    const find = sneakerAddStorage.find((el) => el.id === sneaker.id);
    if (!find) {
      return setSneakerAddStorage([...sneakerAddStorage, sneaker]);
    }
    setSneakerAddStorage(
      sneakerAddStorage.filter((el) => el.id !== sneaker.id)
    );
  };
  useEffect(() => {
    setModalSneakers(sneakerAddStorage);
  }, [sneakerAddStorage]);



  const [priceSneaker, setPriceSneaker] = useLocalStorage("Price", 0);
  
  const counterMoney = (sneaker) => {
    const find = sneakerAddStorage.find((el) => el.id === sneaker.id);
    if (!find) {
      setPriceSneaker((money) => (money += +sneaker.price));
    } else {
      setPriceSneaker((money) => (money -= +sneaker.price));
    }
  };

  const [purchase, setPurchase] = useLocalStorage('Purchase', [])



  const [reviewsStorage, setReviewsStorage] = useLocalStorage('Reviews', [])

  const addCommentSneaker = (id, comment) => {
    setReviewsStorage([...reviewsStorage, {id, comment}])
  }

  const [reviewsSneaker, setReviewsSneaker] = useState()

  const addReviewsSneaker = (id) => {
    setReviewsSneaker(id)
  }
  
  return (
    <div className="contain">
      <BrowserRouter>
        <ModalBasket
          priceSneaker={priceSneaker}
          setPriceSneaker={setPriceSneaker}
          sneakerAddStorage={sneakerAddStorage}
          setSneakerAddStorage={setSneakerAddStorage}
          setModal={setModal}
          modal={modal}
          modalSneakers={modalSneakers}
        ></ModalBasket>
        <Header
          priceSneaker={priceSneaker}
          sneakerLikeStorage={sneakerLikeStorage}
          setModal={setModal}
        ></Header>
        <section className="page">
          <Routes>
            <Route
              path=""
              element={
                <Home
                  addReviewsSneaker={addReviewsSneaker}
                  sneakerLikeStorage={sneakerLikeStorage}
                  resetValueLikeStorage={resetValueLikeStorage}
                  sneakerAddStorage={sneakerAddStorage}
                  resetValueAddStorage={resetValueAddStorage}
                  setModalSneakers={setModalSneakers}
                  counterMoney={counterMoney}
                ></Home>
              }
            ></Route>
            <Route path="*" element={<Error></Error>}></Route>
            <Route
              path="/favorite"
              element={
                <FavoriteSneakers
                  resetValueLikeStorage={resetValueLikeStorage}
                  counterMoney={counterMoney}
                  sneakerLikeStorage={sneakerLikeStorage}
                  resetValueAddStorage={resetValueAddStorage}
                  sneakerAddStorage={sneakerAddStorage}
                ></FavoriteSneakers>
              }
            ></Route>
            <Route
              path="/form"
              element={
                <SneakerForm
                  purchase={purchase}
                  setPurchase={setPurchase}
                  modalSneakers={modalSneakers}
                  setSneakerAddStorage={setSneakerAddStorage}
                  setPriceSneaker={setPriceSneaker}
                ></SneakerForm>
              }
            ></Route>
            <Route
              path="/purchases"
              element={
                <Purchases
                  addReviewsSneaker={addReviewsSneaker}
                  reviewsStorage={reviewsStorage}
                  addCommentSneaker={addCommentSneaker}
                  resetValueLikeStorage={resetValueLikeStorage}
                  purchase={purchase}
                  sneakerLikeStorage={sneakerLikeStorage}
                ></Purchases>
              }
            ></Route>
            <Route path="/reviews" element={<Reviews reviewsStorage={reviewsStorage} reviewsSneaker={reviewsSneaker}></Reviews>}></Route>
            <Route
              path="/thanks"
              element={<ThanksForPurchase></ThanksForPurchase>}
            ></Route>
          </Routes>
        </section>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
