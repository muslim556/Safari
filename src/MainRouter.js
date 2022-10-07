import React from "react";
import "./Css/App.css"
import "./Css/media.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Clothes } from "./Pages/Clothes/Clothes";
import { Shoes } from "./Pages/Shoes/Shoes";
import { NotFound } from "./Pages/NotFound";
import { NavBar } from "./Components/NavBar/NavBar";
import { Cart } from "./Pages/Cart/Cart";
import { Footer } from "./Components/Function";
import { Accessories } from "./Pages/Accessories/Accessories";
import { Profil } from "./Profil";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Favorite } from "./Pages/ProfilPages/Favorite";
import {Checkout} from "./Pages/Checkout/Checkout"
import { Search } from "./Pages/Search/Search";

export function MainRouter() {
  return (
    <BrowserRouter>
      <NavBar />
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        transition={Flip}
        limit={3}
        theme="colored"
      />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/safari" extand element={<Home />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/profil/*" element={<Profil />} />
        <Route path="cart/checkout" element={<Checkout />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
