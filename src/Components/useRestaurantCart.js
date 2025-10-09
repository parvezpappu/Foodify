import {useEffect ,useState } from "react";


 const useRestaurantCart=()=>{
    const [RestaurantInfo,setRestaurantInfo]=useState([]);
    const [filteredRestaurantInfo,setfileredRestaurantInfo]=useState([]);
    useEffect(()=>{
      fetchData();
    },[]);

    const fetchData=async ()=>{
        const res =await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const json=await res.json();
        const dataDestructure=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurantInfo(dataDestructure);
        setfileredRestaurantInfo(dataDestructure)
    }

    return [filteredRestaurantInfo,RestaurantInfo,setRestaurantInfo,setfileredRestaurantInfo];
 }

 export default useRestaurantCart;

