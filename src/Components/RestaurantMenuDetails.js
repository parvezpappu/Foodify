import { useEffect, useState } from "react";
import Restaurant_Menu from "../Constants/MENU_API";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantCardDetails = () => {
  const [resInfo, setResInfo] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const data=Array.isArray(Restaurant_Menu)?Restaurant_Menu[0]:Restaurant_Menu;
    if (!data) return "data not found";

    const info=data?.data?.cards?.find(
      (value) =>
        value.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    )?.card?.card?.info;
    setResInfo(info ?? null);

    
    const regularCards =
      data?.data?.cards?.find((value) => value.groupedCard)?.groupedCard
        ?.cardGroupMap?.REGULAR?.cards||[];

    const itemCards = regularCards
      .map((c) => c.card?.card)
      .filter((card) =>
         card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      // ||
         //card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
);
    setCategories(itemCards);
  }, []);

  if (!resInfo) return <h2>Loading...</h2>;
   const {name,cuisines}=resInfo;
  return (
    <div className="text-center">
      <h1 className="font-bold m-[6px] text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines?.join(", ")}</p>

      <div className="mt-4 text-left max-w-2xl mx-auto ">
        {categories.length?(
          categories.map((value) => (
            <RestaurantCategory key={value.title} data={value}/>
          ))
          ):(
          <p>No Categories</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantCardDetails;
