const Items2 = ()=>{
    const items = ["Profile","Preferences"]
    return (
        <>
{items.map((item,index)=><div key={index} className="border border-[#E0E0E0] bg-[#8c9196] h-10 w-auto hover:bg-[#9a9fa5] text-center  ">{item}</div>)}
        </>
    )
}
export default Items2;