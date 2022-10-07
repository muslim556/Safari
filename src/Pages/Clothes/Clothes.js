import React, { useContext, useState, useEffect } from "react";
import "./Clothes.css";
import { ShowProduct } from "./../../Components/Pagination";
import { DataContext } from "../../Components/Context/DataContext";
import { Category } from "../../Components/Function";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

export function Clothes() {
  const { StoreData } = useContext(DataContext);
  const Clothe = StoreData.filter((item) => item.type === "clothes");
  const [ClotheData, setClothesData] = useState(Clothe);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [sort, setSort] = useState("all");
  const [catShowPro, setCatShowPro] = useState([]);
  const [colorShowPro, setColorShowPro] = useState([]);
  const categoryData = ["all", ...new Set(Clothe.map((item) => item.category))];
  const sizeData = [...new Set(Clothe.map((item) => item.size))];
  const colorData = [...new Set(Clothe.map((item) => item.color))];

  useEffect(() => {
    if (sort === "all") {
      setClothesData(Clothe);
    } else if (sort === "mp") {
      const MP = Clothe.filter(
        (item) => item.moreSeen > 64 || item.bestSeling > 4
      );
      const Sort1 = MP.sort(function (a, b) {
        return b.moreSeen - a.moreSeen;
      });
      setClothesData(Sort1);
    } else if (sort === "bs") {
      const BS = Clothe.filter((item) => item.bestSeling);
      const Sort2 = BS.sort(function (a, b) {
        return b.bestSeling - a.bestSeling;
      });
      console.log(Sort2);
      setClothesData(Sort2);
    } else if (sort === "ptl") {
      const PTL = Clothe.filter((item) => item.totalPrice);
      const Sort3 = PTL.sort(function (a, b) {
        return b.totalPrice - a.totalPrice;
      });
      console.log(Sort3);
      setClothesData(Sort3);
    } else if (sort === "pth") {
      const PTH = Clothe.filter((item) => item.totalPrice);
      const Sort4 = PTH.sort(function (a, b) {
        return a.totalPrice - b.totalPrice;
      });
      console.log(Sort4);
      setClothesData(Sort4);
    }
  }, [sort]); // eslint-disable-line

  const CategoryFilter = (category) => {
    if (category === "all") {
      setCatShowPro(Clothe);
      setClothesData(catShowPro);
      console.log(catShowPro);
      return;
    } else {
      const result = Clothe.filter((item) => item.category === category);
      setCatShowPro(result);
      setClothesData(catShowPro);
    }
  };

  const CategorySize = (size) => {
    if (catShowPro.length === 0) {
      if (size === "all") {
        setClothesData(Clothe);
      } else {
        const DataSize = Clothe.filter((item) => item.size === size);
        setClothesData(DataSize);
      }
    } else {
      if (size === "all") {
        setClothesData(Clothe);
        setColorShowPro(Clothe);
      } else {
        const DataSize = catShowPro.filter((item) => item.size === size);
        setClothesData(DataSize);
        setColorShowPro(DataSize);
      }
    }
  };

  const CategoryColor = (color) => {
    if (catShowPro.length === 0) {
      if (color === "all") {
        setClothesData(Clothe);
      } else {
        const DataColor = Clothe.filter((item) => item.color === color);
        setClothesData(DataColor);
      }
    } else {
      if (color === "all") {
        setClothesData(Clothe);
        setColorShowPro(Clothe);
      }
      const DataColor = colorShowPro.filter((item) => item.color === color);
      setClothesData(DataColor);
    }
  };

  const PriceFillter = (price1, price) => {
    const result = Clothe.filter((item) => {
      return item.totalPrice >= price1 && item.totalPrice <= price;
    });
    setClothesData(result);
  };

  return (
    <>
      <div id="clothes_container">
        <h2>CLOTHES</h2>

        <div id="paginate-header">
          <h3
            style={{ display: "flex", alignItems: "center" }}
            onClick={() => {
              setOpenDrawer(true);
            }}
          >
            CATEGORY
            <FilterAltIcon />
          </h3>
          <label>
            Sort by:
            <select
              onChange={(e) => {
                setSort(e.target.value);
              }}
            >
              <option value="all">All</option>
              <option value="mp">Most popular</option>
              <option value="bs">Best Selling</option>
              <option value="ptl">Price: High to Low</option>
              <option value="pth">Price: Low to High</option>
            </select>
          </label>
        </div>

        <div id="PageContainer">
          <Category
            PriceFillter={PriceFillter}
            CategorySize={CategorySize}
            categoryData={categoryData}
            sizeData={sizeData}
            colorData={colorData}
            CategoryColor={CategoryColor}
            CategoryFilter={CategoryFilter}
            setOpenDrawer={setOpenDrawer}
            ClotheData={ClotheData}
            openDrawer={openDrawer}
          />

          <div id="Content">
            <ShowProduct Data={ClotheData} />
          </div>
        </div>
      </div>
    </>
  );
}
