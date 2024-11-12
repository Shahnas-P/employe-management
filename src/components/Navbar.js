import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

function NavbarContainer() {
  const dispatch = useDispatch()
  const toggleMenuHandle = ()=>{
    dispatch(toggleMenu())
  }
  return (
 <Navbar className="bg-[#0056b3] py-4" collapseOnSelect expand="lg" >

      <Container >
        <button onClick={toggleMenuHandle} className='border border-white w-14 h-10 mr-5 text-center rounded-md side-bar'><i className="fa-solid fa-bars text-[#FFFFFF] font-serif text-2xl font-semibold "></i></button>
        <Navbar href="#home" className="text-[#FFFFFF] font-serif text-2xl font-semibold " >Employee Management</Navbar>
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav >
            <Nav href="#Home" className="text-[#FFFFFF] ml-3 font-serif text-lg font-normal hover:underline cursor-pointer" >Home</Nav>
            <Nav className="text-[#FFFFFF] ml-3 font-serif text-lg font-normal hover:underline cursor-pointer"   href="#Departments">
             Departments
            </Nav>
            <Nav href="#Projects" className="text-[#FFFFFF] ml-3 font-serif text-lg font-normal hover:underline cursor-pointer" >Projects</Nav>

            <Nav href="#Settings" className="text-[#FFFFFF] ml-3 font-serif text-lg font-normal hover:underline cursor-pointer" >Settings</Nav>

          </Nav>

        </Navbar.Collapse>
      </Container>

    </Navbar>
   
  );
}

export default NavbarContainer;