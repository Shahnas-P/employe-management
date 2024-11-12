import { useState } from "react";
import Items2 from "./Items2";

const Accordian2 = ()=>{
const [showItems,setShowItems]= useState(false)
    const handleClick = ()=>{
        setShowItems(!showItems)
        
    }

    return (
        <>
        <div>
        <div onClick={handleClick} className=" border-b border-[#E0E0E0] h-20 w-auto p-3  text-center hover:bg-[#339FFF]" >Settings</div>
        <div className="text-center">
            {showItems && <Items2/> }
        </div>
        </div>
        </>
    )
}
export default Accordian2;