import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";
import Error from "./Components/Error";
import About from"./Components/About";
import Contact from "./Components/Contact"
const root=ReactDOM.createRoot(document.getElementById("root"));


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
            element:<Body/>
           },
           {
            path:"/About",
            element:<About/>
           },
           {
            path:"/Contact",
            element:<Contact/>
           }
           

        ],
        errorElement:<Error/>

    }
])

root.render(< RouterProvider router={Approuter}/>);

