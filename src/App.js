import React from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Events from './components/Events/Events';
//import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';
import Gallery from './components/Galley/Gallery';
import Home from './components/Home/Home';
import Startup from './components/Startup/Startup';
import Team from './components/Team/Team';
import Testimonial from './components/Testimonial/Testimonial';
import Wings from './components/Wings/Wing';
import Footer from './components/Footer/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';
const App=()=> {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
        <>
         <Home/> 
         <About/> 
        <Wings/>
        <Events/>
        <UpcomingEvents/>
        <Gallery/>
        <Startup/>
        <Testimonial/>
        <Team/>
        <Contact/>
        <Footer/>    
        </>
      }></Route>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
