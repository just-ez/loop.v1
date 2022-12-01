
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'

// component
import Nav from './components/nav'
import Home from './components/hero-sec';
import React, { useRef } from 'react';
function App() {
  const myRef = useRef(null)
 
window.addEventListener('mousemove', (e) => {
  const trailer = myRef.current
  let x = e.clientX - trailer.offsetWidth / 2 ,
  y= e.clientY -  trailer.offsetHeight  / 2
  const keyFrame =  { transform :`translate(${x}px, ${y}px)` }
  trailer.animate(keyFrame, {
    duration: 1000,
    fill: "forwards"
})
})
  return (
    <div className="App">
   <div id="trailer" ref={myRef}>

   </div>
     <BrowserRouter> 
       <Nav/>
     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
