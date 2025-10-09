  import useRestaurantCart from "./useRestaurantCart";
  import RestuaratnCart from "./RestaurantCart";
  const Body=()=>{
  const  [filteredRestaurantInfo,RestaurantInfo,setRestaurantInfo]=useRestaurantCart();

    return (
        <div className="flex flex-wrap justify-evenly gap-6 p-4">
          {
             RestaurantInfo.map((value)=>(
              < RestuaratnCart key={value.info.id} resData={value.info} />
             ))
            
          }
        </div>
    )
 }

 export default Body;