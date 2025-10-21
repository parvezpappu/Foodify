

const ItemList=({items})=>{
  //  console.log(items);
      return (
      <div>
      {items.map((item) => {
        const info=item?.card?.info;
        if (!info)return null;
        return (
          <div
            key={info.id ?? info.name}
            className="p-2 m-2 border-b-2 border-gray-300 dark:border-gray-600 text-left flex justify-between items-start"
          >
            <div className="flex-1 pr-4">
              <div className="py-2">
                <span className="font-medium">{info.name}</span>
                <span className="ml-2 text-sm">
                  ৳ {info.price?info.price/100:info.defaultPrice/100}
                </span>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-300">
                {info.description}
              </p>
            </div>
            
             <div className="relative w-28 h-28">
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  info.imageId
                }
                alt={info.name}
                className="w-full h-full object-cover rounded"
              />
              {/* Add button positioned inside the image */}
              <button className="absolute top-1.8/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-sm px-3 py-1 rounded shadow-md">
                Add+
              </button>
            </div>
            
          </div>
          
        );
      })}
    </div>
  );
}

export default ItemList;