import { useEffect, useState } from "react";
import RestaurantCategory from "./RestaurantCategory";
import { useParams } from "react-router";
import useMenuDetails from "./useMenuDetails";

const RestaurantCardDetails = () => {
  const [showIndex,setShowIndex]=useState(null);
  const {resId}=useParams();
  const {resInfo,categories }=useMenuDetails(resId);

  if (!resInfo)return <h2>Thinking...</h2>;
  const {name,cuisines}=resInfo;

  return (
    <div className="text-center">
      <h1 className="font-bold m-[6px] text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines?.join(", ")}</p>

      <div className="mt-4 text-left max-w-2xl mx-auto ">
        {categories.length ? (
          categories.map((value,index) => (
            <RestaurantCategory
              key={value.title}
              data={value}
              showItems={index===showIndex}
              setShowIndex={()=>
                setShowIndex((prev) =>(prev===index?null:index))
              }
            />
          ))
        ) : (
         <p>No Categories</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantCardDetails;
