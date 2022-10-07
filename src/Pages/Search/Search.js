import React, { useContext } from "react";
import "./Search.css";
import { DataContext } from "../../Components/Context/DataContext";
import { pink } from "@mui/material/colors";
import { Button, Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export function Search() {
  const { search, StoreData, AddCart, AddFavorite } = useContext(DataContext);

  return (
    <>
      <div id="search_container">
        {search === "" ? (
          <p id="search_notfound">Not Found</p>
        ) : (
          StoreData.filter((item) =>
            item.name.toLowerCase().includes(search)
          ).map((item) => {
            return (
              <div key={item.id} id="paginateCard">
                <figure id="Figure">
                  <img src={item.productImg} alt="" />
                  <div className="btn-group">
                    <label onClick={() => AddFavorite(item)}>
                      <Checkbox
                        checked={item.like}
                        icon={<FavoriteBorder sx={{ color: pink[600] }} />}
                        checkedIcon={<Favorite sx={{ color: pink[500] }} />}
                      />
                    </label>
                    <Button
                      onClick={() => {
                        AddCart(item);
                      }}
                    >
                      ADD TO CART{" "}
                      <AddShoppingCartIcon sx={{ color: pink[500] }} />
                    </Button>
                  </div>
                </figure>
                <p>{item.name}</p>
                <p>₦{item.totalPrice}</p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
