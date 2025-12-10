import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../Constants/cartSlice"


 const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items)
     const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart())
    }
    return(
        <div className="text-center my-8 px-4">
        <h1 className="text-3xl font-bold text-white mb-6 tracking-wide drop-shadow">
        Cart </h1>
        <div className="w-6/12 mx-auto bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl    p-6 space-y-4">
        <button className="p-[2px] m-[2px] bg-amber-300  text-white rounded-lg cursor-pointer" onClick={handleClearCart}>Clear Cart</button>
     {cartItems.length===0 && <h1>Your Cart is Empty. Add Items to the Cart</h1>}
    <ItemList items={cartItems} showAddButton={false} />
  </div>
</div>

    )
 }

 export default Cart