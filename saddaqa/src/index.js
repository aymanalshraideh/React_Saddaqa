import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './layout/nav';
import Footer from './layout/footer';
import About from './components/About';
import Contact from './components/Contact';
import Makkah from './components/Makkah';
import Madinah from './components/Madinah';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>

<BrowserRouter>
<Nav />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/contact' element={<Contact />} />
  <Route path='/madinah' element={<Madinah />} />
  <Route path='/makkah' element={<Makkah />} />
</Routes>
</BrowserRouter>
    
    
    <Footer />
 </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

