import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarContainer from './components/Navbar'
import Body from './components/Body';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './utils/store'
function App() {
  return (
    <div>
      <Provider store={store}>
      <NavbarContainer/>
      <Body/>
      {/* <Footer/>   */}
      </Provider> 
    </div>
  );
}

export default App;
