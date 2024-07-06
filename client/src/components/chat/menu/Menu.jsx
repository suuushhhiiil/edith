
// Components
import React from "react";
import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";
const Menu =()=>{
    return(
        <div>
            <Header/>
            <Search/>
            <Conversations/>
        </div>
    )
}
export default Menu;