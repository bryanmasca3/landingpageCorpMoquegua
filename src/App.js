import './App.css';
import Header from './components/Header';
import Politic from './components/Politic';

import Clients from './components/Clients';
import Gallery from './components/Gallery';
import Slider from './components/Slider';
import Nosotros from './components/Nosotros';
import Flota from './components/Flota';
import Data from './components/Data';
import Transporte from './components/Transporte';
import Footer from './components/Footer';
import {AiOutlineArrowUp} from "react-icons/ai";
import Capacitation from './components/Capacitation';
import Contacto from './components/Contacto';
function App() {


  return (
    <>
    <Header />
    <Slider/>

    <Politic/>
  <Nosotros/>

    <Flota/>
    <Transporte/>
    <Data/>

    <Capacitation/>
  
    <Clients/>
 <Gallery/>
    <Contacto/>
 
    <Footer/>
    <a href='#top'>
  <div className='fixed bottom-8 right-8 p-4 inline-block rounded-full  text-white bg-main transition duration-150 ease-in-out hover:bg-mainhover:text-white'>
          <AiOutlineArrowUp/>
        </div>     </a>
   </>
  );
}

export default App;
