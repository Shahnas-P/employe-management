import { useSelector } from "react-redux";
import Accordian1 from "./Accordian1";
import Accordian2 from "./Accordian2";
import store from "../utils/store";

const Sidebar = ()=>{
    const isMenuOpened = useSelector(store=>store.app.isMenuOpen)
    if(!isMenuOpened){
        return null
    }else{
        return (
        
            <>
            <div className="  side-bar flex flex-col w-2/12 border-r border-[#E0E0E0] h-screen bg-[#F0F2F5] text-[#333333] font-serif">
    
            
        <div className=" border-b border-[#E0E0E0] h-20 w-auto p-3  text-center hover:bg-[#339FFF]" > Dashboard</div>
        <div className=" border-b border-[#E0E0E0] h-20 w-auto p-3  text-center hover:bg-[#339FFF]" > Employees</div>
        <Accordian1/>
        <div className=" border-b border-[#E0E0E0] h-20 w-auto p-3  text-center hover:bg-[#339FFF]" > Reports</div>
        <Accordian2/>
        
            
    
            </div>
            </> 
        )
    }
    
   
}
export default Sidebar;