import React, { useState, useContext } from "react";
import "./NavBar.css";
import { NavLink, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { DataContext } from "./../Context/DataContext";
import Logo from "../../Assets/Imgs/Logo.svg";

import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import Person2Icon from "@mui/icons-material/Person2";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { toast } from "react-toastify";

export function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  const { favorite, Cart, setSearch } = useContext(DataContext);

  const navigate = useNavigate();
  const searchFun = (e) => {
    if (e.target.search.value === "") {
      toast.error("Please write smth to search");
    } else {
      navigate("/search");
    }
  };

  return (
    <nav>
      <IconButton
        className="menuBtn"
        onClick={() => {
          setOpenNav(!openNav);
        }}
      >
        <MenuIcon color="black" sx={{ fontSize: 25 }} />
      </IconButton>

      <div className="navLink">
        <NavLink to="/safari">Home</NavLink>
        <NavLink to="/clothes">Clothes</NavLink>
        <NavLink to="/shoes">Shoes</NavLink>
        <NavLink to="/accessories">Accessories</NavLink>
      </div>

      <NavLink to="/safari" className="logo">
        <img src={Logo} alt="" />
      </NavLink>
      <div className="navItem">
        <form
          className="searchLabel"
          onSubmit={(e) => {
            e.preventDefault();
            searchFun(e);
            setSearch(e.target.search.value.toLowerCase());
            e.target.search.value = "";
          }}
        >
          <input type="text" placeholder="Search..." name="search" />

          <button className="searchBtn" onClick={(e) => {}}>
            <SearchIcon color="black" sx={{ fontSize: 25 }} />
          </button>
        </form>

        <NavLink to="/profil" className="navBtn">
          <PersonIcon color="black" sx={{ fontSize: 25 }} />
        </NavLink>

        <NavLink to="/cart" className="navBtn remember">
          {Cart.length > 0 ? (
            <span className="dataLength">{Cart.length}</span>
          ) : (
            ""
          )}
          <ShoppingCartIcon color="black" sx={{ fontSize: 25 }} />
        </NavLink>
        <NavLink to="/profil/favorite" className="navBtn remember">
          {favorite.length > 0 ? (
            <span className="dataLength">{favorite.length}</span>
          ) : (
            ""
          )}
          <FavoriteIcon color="black" sx={{ fontSize: 25 }} />
        </NavLink>
      </div>

      <Drawer
        open={openNav}
        onClose={() => {
          setOpenNav(false);
        }}
        anchor="left"
      >
        <div className="mediaNav">
          <NavLink to="/safari~">
            <img src={Logo} alt="" />
          </NavLink>
          <div className="menuLink">
            <NavLink to="/safari">Home</NavLink>
            <NavLink to="/clothes">Clothes</NavLink>
            <NavLink to="/shoes">Shoes</NavLink>
            <NavLink to="/accessories">Accessories</NavLink>
          </div>
        </div>
      </Drawer>
    </nav>
  );
}

export function ProfilNav() {
  return (
    <>
      <div className="profilNav">
        <NavLink to="account">ACCOUNT DASHBOARD</NavLink>
        <div className="profilNavLink">
          <NavLink to="account">
            <Person2Icon />
            <p> Account Information</p>
          </NavLink>

          <NavLink to="addres">
            <MenuBookIcon />
            <p> Address Book </p>
          </NavLink>

          <NavLink to="order">
            <CardGiftcardIcon />
            <p>My Orders</p>
          </NavLink>

          <NavLink to="favorite">
            <FavoriteIcon />
            <p>My Favorites</p>
          </NavLink>
        </div>
      </div>

      <div className="navCard">
        <NavLink to="/safari" className="logo2">
          <img src={Logo} alt="" />
        </NavLink>
        <NavLink to="account">
          <Person2Icon sx={{ fontSize: 30 }} />
        </NavLink>

        <NavLink to="addres">
          <MenuBookIcon sx={{ fontSize: 30 }} />
        </NavLink>

        <NavLink to="order">
          <CardGiftcardIcon sx={{ fontSize: 30 }} />
        </NavLink>

        <NavLink to="favorite">
          <FavoriteIcon sx={{ fontSize: 30 }} />
        </NavLink>
      </div>
    </>
  );
}
