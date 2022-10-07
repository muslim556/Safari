import React, { useContext, useEffect, useState } from "react";
import { ShowProduct } from "./../../Components/Pagination";
import { DataContext } from "../../Components/Context/DataContext";
import { Category } from "../../Components/Function";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
export function Shoes() {
  const { StoreData } = useContext(DataContext);
  const Shoes = StoreData.filter((item) => item.type === "shoes");

  const [ShoesData, setShoesData] = useState(Shoes);
  const [sort, setSort] = useState("all");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [catShowPro, setCatShowPro] = useState([]);
  const [colorShowPro, setColorShowPro] = useState([]);
  const categoryData = ["all", ...new Set(Shoes.map((item) => item.category))];
  const sizeData = [...new Set(Shoes.map((item) => item.size))];
  const colorData = [...new Set(Shoes.map((item) => item.color))];

  useEffect(() => {
    if (sort === "all") {
      setShoesData(Shoes);
    } else if (sort === "mp") {
      const MP = Shoes.filter(
        (item) => item.moreSeen > 64 || item.bestSeling > 4
      );
      const Sort1 = MP.sort(function (a, b) {
        return b.moreSeen - a.moreSeen;
      });
      setShoesData(Sort1);
    } else if (sort === "bs") {
      const BS = Shoes.filter((item) => item.bestSeling);
      const Sort2 = BS.sort(function (a, b) {
        return b.bestSeling - a.bestSeling;
      });
      console.log(Sort2);
      setShoesData(Sort2);
    } else if (sort === "ptl") {
      const PTL = Shoes.filter((item) => item.totalPrice);
      const Sort3 = PTL.sort(function (a, b) {
        return b.totalPrice - a.totalPrice;
      });
      console.log(Sort3);
      setShoesData(Sort3);
    } else if (sort === "pth") {
      const PTH = Shoes.filter((item) => item.totalPrice);
      const Sort4 = PTH.sort(function (a, b) {
        return a.totalPrice - b.totalPrice;
      });
      setShoesData(Sort4);
    }
  }, [sort]); // eslint-disable-line

  const CategoryFilter = (category) => {
    if (category === "all") {
      setCatShowPro(Shoes);
      setShoesData(catShowPro);
      console.log(catShowPro);
      return;
    } else {
      const result = Shoes.filter((item) => item.category === category);
      setCatShowPro(result);
      setShoesData(catShowPro);
      console.log(catShowPro);
    }
  };

  const CategorySize = (size) => {
    if (catShowPro.length === 0) {
      if (size === "all") {
        setShoesData(Shoes);
      } else {
        const DataSize = Shoes.filter((item) => item.size === size);
        setShoesData(DataSize);
      }
    } else {
      if (size === "all") {
        setShoesData(Shoes);
        setColorShowPro(Shoes);
      } else {
        const DataSize = catShowPro.filter((item) => item.size === size);
        setShoesData(DataSize);
        setColorShowPro(DataSize);
      }
    }
  };

  const CategoryColor = (color) => {
    if (catShowPro.length === 0) {
      if (color === "all") {
        setShoesData(Shoes);
      } else {
        const DataColor = Shoes.filter((item) => item.color === color);
        setShoesData(DataColor);
      }
    } else {
      if (color === "all") {
        setShoesData(Shoes);
        setColorShowPro(Shoes);
      }
      const DataColor = colorShowPro.filter((item) => item.color === color);
      setShoesData(DataColor);
    }
  };

  const PriceFillter = (price1, price) => {
    const result = Shoes.filter((item) => {
      return item.totalPrice >= price1 && item.totalPrice <= price;
    });
    setShoesData(result);
  };

  return (
    <>
      <div id="clothes_container">
        <h2>SHOES</h2>

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
            ShoesData={ShoesData}
            PriceFillter={PriceFillter}
            CategorySize={CategorySize}
            categoryData={categoryData}
            sizeData={sizeData}
            colorData={colorData}
            CategoryColor={CategoryColor}
            CategoryFilter={CategoryFilter}
            setOpenDrawer={setOpenDrawer}
            openDrawer={openDrawer}
          />

          <div id="Content">
            <ShowProduct Data={ShoesData} />
          </div>
        </div>
      </div>
    </>
  );
}
