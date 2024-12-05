import { useEffect, useState } from "react"
import Carousel from "../components/Carousel"
import Navbar from "../components/Navbar";

const Home = () => {
  const [textColor, setTextColor] = useState('text-white');

  useEffect(()=> {
    const backgroundColor = "black"
    if (backgroundColor === "black") {
      setTextColor("text-white")
    } else {
      setTextColor("text-black")
    }
  },[])
  return (
    <div className="bg-black">
      <Navbar textColor={textColor}/>
      <Carousel />
    </div>
    
  )
}

export default Home