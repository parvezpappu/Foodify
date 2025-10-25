import { useEffect, useState } from "react";
import Restaurant_Menu from "../Constants/MENU_API";
import RestaurantCategory from "./RestaurantCategory";
import { useParams } from "react-router";

const RestaurantCardDetails = () => {
  const [resInfo, setResInfo] = useState(null);
  const [categories, setCategories] = useState([]);
  const [showIndex,setShowIndex]=useState(null);
  const {resId}=useParams();
  const index=Number(resId)
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
      .map((c)=>c.card?.card)
      .filter((card) =>
         card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
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
          categories.map((value,index) => (
            <RestaurantCategory key={value.title} data={value} showItems={index===showIndex}
            setShowIndex={
              ()=>
                setShowIndex(prevIndex=>{
                  if(prevIndex==index){
                    return null;
                  }
                  else{
                    return index;
                  }
                })
            }
            /> 
          ))
          ):(
          <p>No Categories</p>
        )}
      </div>
    </div>
  );
 };

 export default RestaurantCardDetails;
