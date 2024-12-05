import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

interface ArrowProps {
    nextSlide: () => void;
    prevSlide: () => void;
}

const Arrow = ({nextSlide, prevSlide}: ArrowProps) => {
  return (
    <div className="absolute top-1/2 left-0 flex gap-5 md:justify-center justify-between items-center w-full px-4 transform -translate-y-1/2 md:bottom-16 md:top-auto
    ">
        <button
            onClick={prevSlide}
            className="shadow transition duration-300 cursor-pointer text-white"
        >
            <FaArrowCircleLeft size={50}/>
        </button>
        <button
            onClick={nextSlide}
            className="shadow transition duration-300 cursor-pointer text-white"
        >
            <FaArrowCircleRight size={50}/>
        </button>
    </div>
  )
}

export default Arrow