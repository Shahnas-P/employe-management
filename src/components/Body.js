import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
const Body = ()=>{
    return (
        <>   
        <div className='flex flex-row'>
        <Sidebar/>
        <MainContainer/>
        
         </div> 
        </>
    )
}
export default Body;