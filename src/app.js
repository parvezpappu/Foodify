import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";
import Error from "./Components/Error";
import { lazy,Suspense } from "react";
import RestaurantCardDetails from "./Components/RestaurantMenuDetails";
const root=ReactDOM.createRoot(document.getElementById("root"));



const Body=lazy(()=>import("./Components/Body"));
const About=lazy(()=> import("./Components/About"));
const Contact=lazy(()=>import("./Components/Contact"))



const RootOfTheComponent=()=>{
    return (
        <div>
         <Header/>
         <Outlet/>
        </div>
    )
}
const Approuter=createBrowserRouter([
    {
        path:"/",
        element:<RootOfTheComponent/>,
        children:[
           {
            path:"/",
            element:<Suspense fallback="Loading.."><Body/></Suspense>
           },
           {
            path:"/About",
            element:<Suspense fallback="Loading..."><About/></Suspense>
           },
           {
            path:"/Contact",
            element: <Suspense fallback="Loading.."><Contact/></Suspense>
           },
           {
            path:"/CartDetails/:resName",
            element:<RestaurantCardDetails/>
           }
 
        ],
        errorElement:<Error/>
       
        
    }
])
root.render(< RouterProvider router={Approuter}/>);

