

 const RestuaratnCart=(props)=>{
    const {resData}=props;
    const {name,cloudinaryImageId,cuisines,avgRating}=resData;
    return (
        <>
       
        <div className="border-[2px] rounded-[10px] p-3 w-[250px] bg-[#111] text-white shadow-md hover:scale-105 transition-transform ">
         <img className="w-full h-48 object-cover rounded-[8px] mb-3" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
         <h1 className="font-semibold text-lg" >Name: {name}</h1>
         <h1 className="whitespace-pre-line break-words">Cuisines : {cuisines.join(",")}</h1>
         <h1 className="mt-1">Rating : {avgRating}</h1>
          </div>
  
        </>
       
    )
 }

 export default RestuaratnCart;