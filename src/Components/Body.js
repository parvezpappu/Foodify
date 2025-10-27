  import useRestaurantCart from "./useRestaurantCart";
  import RestuaratnCart from "./RestaurantCart";
  import Restaurant_Menu from "../Constants/MENU_API";
  import Shimmer from "./ShimerUi";
  import { useState } from "react";


  const Body=()=>{
  const [searchText,setSearchText]=useState("");
  const [filteredRestaurantInfo,RestaurantInfo,setRestaurantInfo,setfileredRestaurantInfo]=useRestaurantCart();

  const menuIdByName = {};
  Restaurant_Menu.forEach((m) => {
  const restaurantCard = m?.data?.cards?.find(
    (value) =>
        value.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );
    const name = restaurantCard?.card?.card?.info?.name?.toLowerCase();
    const id = restaurantCard?.card?.card?.info?.id;
    if (name && id) menuIdByName[name] = id;
   });
 
    if(RestaurantInfo.length===0){
      return (<Shimmer/>)
    }
    return (
     <>
      <div className="flex">
        <div className="input ">
         <input className ="border-[2px] rounded-[15px] p-[5px]" type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
        </div>
        <button className="button border-[2px] p-[5px] rounded-[15px] ml-[7px] cursor-pointer hover:bg-blue-900 " onClick={()=>{
         const filteredData=RestaurantInfo.filter((value)=>value.info.name.toLowerCase().includes(searchText.toLowerCase()));
         setfileredRestaurantInfo(filteredData);
        }}>Search</button>
          <button className="border-[2px] p-[5px] rounded-[15px] ml-[7px] cursor-pointer hover:bg-blue-900" onClick={()=>{
              const filteredTopRatedRestaurant=RestaurantInfo.filter((value)=> value.info.avgRatingString>=4.5);
               setfileredRestaurantInfo(filteredTopRatedRestaurant);
               setRestaurantInfo(filteredTopRatedRestaurant);
          }}>Top Rated Restaurant</button>
          </div>
       <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(260px,1fr))] mt-[20px] ml-[10px]">
  {filteredRestaurantInfo.map((value) => {
    const restaurantName = value.info.name.toLowerCase();
    const menuId = menuIdByName[restaurantName] || value.info.id;

    return (
      <RestuaratnCart key={value.info.id} resData={{ ...value.info, id: menuId }} />
    );
  })}
</div>
        </>
    )
 }

 export default Body;