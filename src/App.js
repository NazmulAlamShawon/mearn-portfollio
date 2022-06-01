
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Conatact/Contact';

import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Reviews from './Pages/Reviews/Reviews';
import Services from './Pages/Services/Services';
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/Navbar';




 



function App() {

  return (
    <div>
      <Navbar></Navbar>
    <Routes>
       <Route path='/'  element={<Home />} />
       <Route path='about'  element={<About />} />
       <Route path='services'  element={<Services />} />
       <Route path='review'  element={<Reviews/>} />
       <Route path='contact'  element={<Contact/>} />
       <Route path='login'  element={<Login/>} />
      
    </Routes>
    <Footer></Footer>
       
    </div>
  );
}

export default App;
