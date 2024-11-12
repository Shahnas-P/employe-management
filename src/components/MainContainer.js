import { useEffect, useState } from "react";
import UserCard from "./UserCard";
const MainContainer = ()=>{
const [users,setUser] = useState([])
useEffect(()=>{
    getAllUser()
},[])

const getAllUser =async ()=>{
    const response = await fetch("https://dummyjson.com/users")
    const json =await response.json()
    setUser(json.users)
    
    
}
    return (
        <>
        <div className=" relative w-full flex flex-wrap justify-center mt-4">
{users?.map((user)=> <UserCard user={user} />)}

        </div>
        </>
    )
}
export default MainContainer;