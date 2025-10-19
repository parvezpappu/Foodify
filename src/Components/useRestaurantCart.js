import {useEffect ,useState } from "react";
import Restaurant_List from "../Constants/RESTAURANT_API";


 const useRestaurantCart=()=>{
    const [RestaurantInfo,setRestaurantInfo]=useState([]);
    const [filteredRestaurantInfo,setfileredRestaurantInfo]=useState([]);
    useEffect(()=>{
      fetchData();
    },[]);
    const fetchData=async ()=>{
      // Because of Changing the Restaurant List again and  again so i fixed the restaurant List.
       // const res =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       // const json=await res.json();
        const dataDestructure =Restaurant_List?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
     //   const dataDestructure=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurantInfo(dataDestructure);
        setfileredRestaurantInfo(dataDestructure)
    }

    return [filteredRestaurantInfo,RestaurantInfo,setRestaurantInfo,setfileredRestaurantInfo];
 }

 export default useRestaurantCart;

