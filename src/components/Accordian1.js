import { useState } from "react";
import Items1 from "./Items1";

const Accordian1 = ()=>{
const [showItems,setShowItems]= useState(false)
    const handleClick = ()=>{
        setShowItems(!showItems)
        
    }

    return (
        <>
        <div>
        <div onClick={handleClick} className=" border-b border-[#E0E0E0] h-20 w-auto p-3  text-center hover:bg-[#339FFF]"  >Departments</div>
        <div className="text-center">
            {showItems && <Items1/> }
        </div>
        </div>
        </>
    )
}
export default Accordian1;