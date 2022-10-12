import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import sliderImg from "../Assets/Imgs/sliderImg.png";
import topBtn from "../Assets/Imgs/topBtn.svg";
import Drawer from "@mui/material/Drawer";

import logo from "../Assets/Imgs/Logo.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Style.css";

export function Slider1() {
  const data = [
    {
      id: 0,
      img: sliderImg,
    },
    {
      id: 1,
      img: sliderImg,
    },
    {
      id: 2,
      img: sliderImg,
    },
    {
      id: 3,
      img: sliderImg,
    },
  ];

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    infinite: true,
    slidesToShow: 1,
    centrMode: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1600,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplaySpeed: 1000,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "unset",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "10px",
          height: "10px",
          color: "#000",
          border: "2px solid #FFFFFF",
          borderRadius: "1000px",
        }}
        id="dots"
      ></div>
    ),
  };

  return (
    <div id="SliderCard">
      <Slider {...settings}>
        {data.map((item, index) => {
          return <img key={index} id="SliderImg" src={item.img} alt="slider" />;
        })}
      </Slider>
    </div>
  );
}

export function TopBtn() {
  const [top, setTop] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [top]);
  return (
    <>
      <Button
        id="topBtn"
        onClick={() => {
          setTop(!top);
        }}
      >
        <img src={topBtn} alt="" />
      </Button>
    </>
  );
}

export function Category({
  openDrawer,
  setOpenDrawer,
  PriceFillter,
  CategorySize,
  categoryData,
  sizeData,
  colorData,
  CategoryColor,
  CategoryFilter,
}) {
  return (
    <>
      <div id="Category">
        <div id="category_card">
          {categoryData.map((item, index) => {
            return (
              <label
                className="animate__animated animate__backInLeft CategoryLabel"
                onClick={() => CategoryFilter(item)}
                key={index}
              >
                <input type="radio" name="category" />
                <p id="showType">{item}</p>
              </label>
            );
          })}
        </div>
        <div id="size_container">
          <div id="size_clear_card">
            <p>Size</p>
            <button>Clear X</button>
          </div>
          <span id="line"></span>
          <div id="choose_size_card">
            {sizeData.map((item, index) => {
              return (
                <label
                  id="choose_size"
                  key={index}
                  className="animate__animated animate__backInLeft"
                >
                  <input
                    type="radio"
                    name="size"
                    onClick={() => CategorySize(item)}
                  />
                  <p id="size">{item}</p>
                </label>
              );
            })}
          </div>
        </div>
        <div id="size_container">
          <div id="size_clear_card">
            <p>Color</p>
            <button>Clear X</button>
          </div>
          <span id="line"></span>
          <div id="choose_size_card">
            {colorData.map((item, index) => {
              return (
                <label
                  id="choose_color"
                  key={index}
                  className="animate__animated animate__backInLeft"
                >
                  <input type="radio" onClick={() => CategoryColor(item)} />
                  <div id="color_card" className={item}></div>
                  <p id="color">{item}</p>
                </label>
              );
            })}
          </div>
        </div>
        <div id="size_container">
          <div id="size_clear_card">
            <p>Price</p>
            <button>Clear X</button>
          </div>
          <span id="line"></span>
          <div id="choose_price_card">
            <label
              className="animate__animated animate__backInLeft"
              id="choose_price"
              onClick={() => {
                PriceFillter(0, 10000);
              }}
            >
              <input type="radio" name="aa" />
              <p id="price">₦0 - ₦10,000</p>
            </label>
            <label
              className="animate__animated animate__backInLeft"
              id="choose_price"
              onClick={() => {
                PriceFillter(10000, 20000);
              }}
            >
              <input type="radio" name="aa" />
              <p id="price">₦10,000 - ₦20,000</p>
            </label>
            <label
              className="animate__animated animate__backInLeft"
              id="choose_price"
              onClick={() => {
                PriceFillter(20000, 30000);
              }}
            >
              <input type="radio" name="aa" />
              <p id="price">₦20,000 - ₦ 30,000</p>
            </label>
            <label
              className="animate__animated animate__backInLeft"
              id="choose_price"
              onClick={() => {
                PriceFillter(30000, 60000);
              }}
            >
              <input type="radio" name="aa" />
              <p id="price">₦30,000 - ₦ 60,000</p>
            </label>
            <label
              className="animate__animated animate__backInLeft"
              id="choose_price"
              onClick={() => {
                PriceFillter(60000, 100000);
              }}
            >
              <input type="radio" name="aa" />

              <p id="price">₦60,00 - ₦ 100,000</p>
            </label>
            <form
              id="write_price_form"
              onSubmit={(e) => {
                e.preventDefault();
                const firstValue = e.target.price1.value;
                const secondValue = e.target.price2.value;
                PriceFillter(firstValue, secondValue);
              }}
            >
              <input type="number" name="price1" />
              <p>to</p>

              <input type="number" name="price2" />
              <input type="submit" value="Apply" />
            </form>
          </div>
        </div>
      </div>

      <Drawer
        className="Drawer"
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
      >
        <div className="openDrawer">
          <h2
            style={{ marginBottom: "50px", cursor: "pointer" }}
            onClick={() => {
              setOpenDrawer(false);
            }}
          >
            Category
          </h2>

          <div id="category_card">
            {categoryData.map((item, index) => {
              return (
                <label
                  className="animate__animated animate__backInLeft CategoryLabel"
                  onClick={() => {
                    CategoryFilter(item);
                    setOpenDrawer(false);
                  }}
                  key={index}
                >
                  <input type="radio" name="category" />
                  <p id="showType">{item}</p>
                </label>
              );
            })}
          </div>
          <div id="size_container">
            <div id="size_clear_card">
              <p>Size</p>
              <button>Clear X</button>
            </div>
            <span id="line"></span>
            <div id="choose_size_card">
              {sizeData.map((item, index) => {
                return (
                  <label
                    className="animate__animated animate__backInLeft"
                    id="choose_size"
                    key={index}
                    onClick={() => {
                      CategorySize(item);
                      setOpenDrawer(false);
                    }}
                  >
                    <input type="radio" name="size" />
                    <p id="size">{item}</p>
                  </label>
                );
              })}
            </div>
          </div>
          <div id="size_container">
            <div id="size_clear_card">
              <p>Color</p>
              <button>Clear X</button>
            </div>
            <span id="line"></span>
            <div id="choose_size_card">
              {colorData.map((item, index) => {
                return (
                  <label
                    id="choose_color"
                    key={index}
                    onClick={() => {
                      CategoryColor(item);
                      setOpenDrawer(false);
                    }}
                    className="animate__animated animate__backInLeft"
                  >
                    <input type="radio" />
                    <div id="color_card" className={item}></div>
                    <p id="color">{item}</p>
                  </label>
                );
              })}
            </div>
          </div>
          <div id="size_container">
            <div id="size_clear_card">
              <p>Color</p>
              <button>Clear X</button>
            </div>
            <span id="line"></span>
            <div id="choose_price_card">
              <label
                id="choose_price"
                onClick={() => {
                  PriceFillter(0, 10000);
                }}
                className="animate__animated animate__backInLeft"
              >
                <input type="radio" name="aa" />
                <p id="price">₦0 - ₦10,000</p>
              </label>
              <label
                className="animate__animated animate__backInLeft"
                id="choose_price"
                onClick={() => {
                  PriceFillter(10000, 20000);
                }}
              >
                <input type="radio" name="aa" />
                <p id="price">₦10,000 - ₦20,000</p>
              </label>
              <label
                className="animate__animated animate__backInLeft"
                id="choose_price"
                onClick={() => {
                  PriceFillter(20000, 30000);
                  setOpenDrawer(false);
                }}
              >
                <input type="radio" name="aa" />
                <p id="price">₦20,000 - ₦ 30,000</p>
              </label>
              <label
                className="animate__animated animate__backInLeft"
                id="choose_price"
                onClick={() => {
                  PriceFillter(30000, 60000);
                  setOpenDrawer(false);
                }}
              >
                <input type="radio" name="aa" />
                <p id="price">₦30,000 - ₦ 60,000</p>
              </label>
              <label
                className="animate__animated animate__backInLeft"
                id="choose_price"
                onClick={() => {
                  PriceFillter(60000, 100000);
                  setOpenDrawer(false);
                }}
              >
                <input type="radio" name="aa" />

                <p id="price">₦60,00 - ₦ 100,000</p>
              </label>
              <form
                id="write_price_form"
                onSubmit={(e) => {
                  e.preventDefault();
                  const firstValue = e.target.price1.value;
                  const secondValue = e.target.price2.value;
                  PriceFillter(firstValue, secondValue);
                }}
              >
                <input type="number" name="price1" />
                <p>to</p>

                <input type="number" name="price2" />
                <input type="submit" value="Apply" />
              </form>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export function Footer() {
  return (
    <footer id="footer">
      <button
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <img src={logo} alt="" />
      </button>
      <div id="footer_link_card">
        <p>About Us</p>
        <p>Contact</p>
        <p>Terms & Conditions</p>
      </div>
      <div id="footer_sm_card">
        <label htmlFor="link">
          <FacebookIcon />
          <a href="https://www.facebook.com/profile.php?id=100085213131855">
            Facebook
          </a>
        </label>
        <label htmlFor="link">
          <TwitterIcon />
          <a href="https://t.me/muslim_1233">Twitter</a>
        </label>
        <label htmlFor="link">
          <InstagramIcon color="pink" />
          <a href="https://www.instagram.com/muslim_najmiddinov/">Instagram</a>
        </label>
      </div>
      <div id="footer_form_card">
        <p>Subscribe to our newsletter</p>
        <form>
          <input type="email" placeholder="Email Address" />
          <input type="submit" value="OK" />
        </form>
      </div>
      <div>
        <p>497 Evergreen Rd. Roseville, CA 95673</p>
        <p>+44 345 678 903</p>
        <p>safari@gmail.com</p>
      </div>
    </footer>
  );
}
