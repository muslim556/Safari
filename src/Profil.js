import React from "react";
import "./Css/Profil.css"
// import { DataContext } from "../Components/Context/DataContext";
import { ProfilNav } from "./Components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import { Account } from "./Pages/ProfilPages/Account";
import { Address } from "./Pages/ProfilPages/Address";
import { Favorite } from "./Pages/ProfilPages/Favorite";
import { Order } from "./Pages/ProfilPages/Order"

export function Profil() {

  return (
    <>
      <div className="profil">
        <ProfilNav />
        <div className="profilRout">
          <Routes >
            <Route path="/account" extand element={<Account />} />
            <Route path="/addres" element={<Address />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
