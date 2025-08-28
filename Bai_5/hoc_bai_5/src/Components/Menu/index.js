import {  useContext } from "react";
import { MenuContext } from "../Layout";
 function Menu () {
   const menus = useContext(MenuContext) ?? [];
 return (
    <>
    <ul>
        {menus.map((item,index) => (
            <li key={index} > {item}</li>
       ) )}
    </ul>
    </>
 ) 
}

export default Menu;