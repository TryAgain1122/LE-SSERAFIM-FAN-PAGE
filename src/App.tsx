import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import { useEffect, useState } from "react"
function App() {
  const [textColor, setTextColor] = useState('text-black');

  useEffect(() => {
    const backgroundColor = "white";
    if (backgroundColor === "white") {
      setTextColor("text-black")
    } else {
      setTextColor("text-white")
    }
  },[])
  return ( 
   <BrowserRouter>
   <Navbar textColor={textColor}/>
    <Routes> 
     <Route path="/" element={<Home />}></Route>
     <Route path="/about" element={<About />}></Route>
     <Route path="/gallery" element={<Gallery />}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
