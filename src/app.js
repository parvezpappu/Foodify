import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import Body from "./Components/Body";
const root=ReactDOM.createRoot(document.getElementById("root"));

const Approuter=()=>{
    return (
        <div>
         <Header/>
         <Body/>
        </div>
    )
}

root.render(<Approuter/>);

