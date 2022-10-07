import React, { useContext, useState, useEffect } from "react";
import { ShowProduct } from "./../../Components/Pagination";
import { DataContext } from "../../Components/Context/DataContext";
import { Category } from "../../Components/Function";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

export function Accessories() {
  const { StoreData } = useContext(DataContext);
  const Accesories = StoreData.filter((item) => item.type === "accessory");

  const [AccesoriesData, setAccesoriesData] = useState(Accesories);
  const [sort, setSort] = useState("all");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [catShowPro, setCatShowPro] = useState([]);
  const [colorShowPro, setColorShowPro] = useState([]);
  const categoryData = [
    "all",
    ...new Set(Accesories.map((item) => item.category)),
  ];
  const sizeData = [...new Set(Accesories.map((item) => item.size))];
  const colorData = [...new Set(Accesories.map((item) => item.color))];

  useEffect(() => {
    if (sort === "all") {
      setAccesoriesData(Accesories);
    } else if (sort === "mp") {
      const MP = Accesories.filter(
        (item) => item.moreSeen > 64 || item.bestSeling > 4
      );
      const Sort1 = MP.sort(function (a, b) {
        return b.moreSeen - a.moreSeen;
      });
      setAccesoriesData(Sort1);
    } else if (sort === "bs") {
      const BS = Accesories.filter((item) => item.bestSeling);
      const Sort2 = BS.sort(function (a, b) {
        return b.bestSeling - a.bestSeling;
      });
      console.log(Sort2);
      setAccesoriesData(Sort2);
    } else if (sort === "ptl") {
      const PTL = Accesories.filter((item) => item.totalPrice);
      const Sort3 = PTL.sort(function (a, b) {
        return b.totalPrice - a.totalPrice;
      });
      console.log(Sort3);
      setAccesoriesData(Sort3);
    } else if (sort === "pth") {
      const PTH = Accesories.filter((item) => item.totalPrice);
      const Sort4 = PTH.sort(function (a, b) {
        return a.totalPrice - b.totalPrice;
      });
      setAccesoriesData(Sort4);
    }
  }, [sort]); // eslint-disable-line

  const CategoryFilter = (category) => {
    if (category === "all") {
      setCatShowPro(Accesories);
      setAccesoriesData(catShowPro);
      console.log(catShowPro);
      return;
    } else {
      const result = Accesories.filter((item) => item.category === category);
      setCatShowPro(result);
      setAccesoriesData(catShowPro);
      console.log(catShowPro);
    }
  };

  const CategorySize = (size) => {
    if (catShowPro.length === 0) {
      if (size === "all") {
        setAccesoriesData(Accesories);
      } else {
        const DataSize = Accesories.filter((item) => item.size === size);
        setAccesoriesData(DataSize);
      }
    } else {
      if (size === "all") {
        setAccesoriesData(Accesories);
        setColorShowPro(Accesories);
      } else {
        const DataSize = catShowPro.filter((item) => item.size === size);
        setAccesoriesData(DataSize);
        setColorShowPro(DataSize);
      }
    }
  };

  const CategoryColor = (color) => {
    if (catShowPro.length === 0) {
      if (color === "all") {
        setAccesoriesData(Accesories);
      } else {
        const DataColor = Accesories.filter((item) => item.color === color);
        setAccesoriesData(DataColor);
      }
    } else {
      if (color === "all") {
        setAccesoriesData(Accesories);
        setColorShowPro(Accesories);
      }
      const DataColor = colorShowPro.filter((item) => item.color === color);
      setAccesoriesData(DataColor);
    }
  };

  const PriceFillter = (price1, price) => {
    const result = Accesories.filter((item) => {
      return item.totalPrice >= price1 && item.totalPrice <= price;
    });
    setAccesoriesData(result);
  };

  return (
    <>
      <div id="clothes_container">
        <h2>ACCESSORIES</h2>

        <div id="paginate-header">
          <h3
            style={{
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => {
              setOpenDrawer(true);
            }}
          >
            <p id="category_text"> CATEGORY</p>
            <FilterAltIcon />{" "}
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
            AccesoriesData={AccesoriesData}
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
            <ShowProduct Data={AccesoriesData} />
          </div>
        </div>
      </div>
    </>
  );
}
