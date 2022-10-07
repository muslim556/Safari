import React, { useState, useContext } from "react";
import { Slider1 } from "../../Components/Function";
import "./home.css";
import bannerBtn from "../../Assets/Imgs/BannerBtn.svg";
import { DataContext } from "../../Components/Context/DataContext";
import { ShowProduct } from "../../Components/Pagination";

export function Home() {
  const Data = useContext(DataContext);
  const [open, setOpen] = useState(false);
  const HomeData = Data.StoreData.filter(
    (item) => item.bestSeling > 4 || item.moreSeen > 70
  );

  return (
    <>
      <header id="homeHeader">
        <Slider1 />
        <button
          id="bannerBtn"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span>Explore our collection</span>

          <button className={open ? "rotate active" : "rotate"}>
            <img src={bannerBtn} alt="" />
          </button>
        </button>
      </header>
      <section className={open ? "activ HomeSec1" : "HomeSec1"}>
        <div id="SeCard">
          <div>
            <div className="line"></div>
            <h2>Shop your style</h2>
            <div className="line"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
            gravida cursus adipiscing viverra at tortor, egestas odio
            parturient. Morbi ut lorem in erat. Et et molestie diam diam
            ultricies. Scelerisque duis diam ac cras dictum adipiscing.
            Venenatis at sit proin ut vitae adipiscing id facilisis.
          </p>
        </div>
        <ShowProduct Data={HomeData} />
      </section>
    </>
  );
}
