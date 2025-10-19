// import { useEffect, useState } from "react"


//  const useCardDetails=(resId)=>{

//     const [cartDetails,setCartDetails]=useState(null);

//    useEffect(()=>{
//        fetchData();
//    },[]);


//    const fetchData=async()=>{
//     const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9524538&lng=77.7002984&restaurantId=445762&catalog_qa=undefined&submitAction=ENTER");
//     const json=await data.json();
//     setCartDetails(json?.data)
//    }

//    return cartDetails;
//  }

//  export default useCardDetails