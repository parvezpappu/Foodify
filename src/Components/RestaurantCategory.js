import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory=({data})=>{
  const [showItems,setShowItems]=useState(false);
  const handleClick=()=>{
    setShowItems(!showItems)
  }
  return(
    <div>
         <div className="w-8/12 bg-gray-50 shadow-lg p-4 text-center mx-auto my-4 ">
         <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">{data.title} ({data.itemCards?.length||data.categories?.[0]?.itemCards?.length||0})</span>
            <span>⬇</span>
         </div>
           { showItems && <ItemList items={data.itemCards}/>}
            
         </div>
        
        
    </div>
  )
}
export default RestaurantCategory;