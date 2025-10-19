
 import { useParams, useSearchParams } from "react-router";
 import useCardDetails from "./useCartDetails";
 import Shimmer from "./ShimerUi";
 import { useEffect, useState } from "react";

 const RestaurantCardDetails=()=>{
 const [resInfo,setResInfo]=useState();

    useEffect(()=>{
    fetchData();
    },[]);
    
   const fetchData=async()=>{ 
        const response=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.6020984&lng=88.38294549999999&restaurantId=380023&catalog_qa=undefined&submitAction=ENTER");
        const data=await response.json();
        console.log(data);
      //  setResInfo(data);
        
    }

    return (
        <div className="cardDetails">
           <h1>Name of the restaurant</h1>
           <h2>Manu</h2>
        </div>
    )
 }
 

 export default RestaurantCardDetails;