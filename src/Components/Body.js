  import useRestaurantCart from "./useRestaurantCart";
  import RestuaratnCart from "./RestaurantCart";
  import Shimmer from "./ShimerUi";
  import { useState } from "react";

  const Body=()=>{
  const [searchText,setSearchText]=useState("");
  const  [filteredRestaurantInfo,RestaurantInfo,setRestaurantInfo,setfileredRestaurantInfo]=useRestaurantCart();
    

  


    if(RestaurantInfo.length===0){
      return (<Shimmer/>)
    }

    return (
     <>
        <div className="input ">
         <input className ="border-[2px] rounded-[15px] p-[5px]" type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
        </div>
        <button className="button" onClick={()=>{
         const filteredData=RestaurantInfo.filter((value)=>value.info.name.toLowerCase().includes(searchText.toLowerCase()));
         setfileredRestaurantInfo(filteredData)
        }}>Search</button>

        <div className="flex flex-wrap justify-evenly gap-6 p-4">
          {
             filteredRestaurantInfo.map((value)=>(
              < RestuaratnCart key={value.info.id} resData={value.info} />
             ))
            
          }
        </div>
        </>
    )
 }

 export default Body;