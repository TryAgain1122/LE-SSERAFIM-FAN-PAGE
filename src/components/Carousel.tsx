import { useState } from "react"
import { images, videos } from "../data.ts";
import CarouselItem from "./CarouselItem";
import Thumbnail from "./Thumbnail";
import Arrow from "./Arrow";
import { motion } from "framer-motion";
const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    }

    const handleThumbnailClick = (index: number) => {
        setCurrentIndex(index)
    }
  return (
    <motion.div className="relative w-full h-screen overflow-hidden"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
    >
        <div className="absolute inset-0">
            {videos.map((video, index) => (
                <CarouselItem 
                    key={index}
                    video={video}
                    isActive={index === currentIndex}
                />
            ))}
        </div>
        <Thumbnail 
            images={images}
            
            currentIndex={currentIndex}
            onThumbnailClick={handleThumbnailClick}
        />
        <Arrow nextSlide={nextSlide} prevSlide={prevSlide}></Arrow>
    </motion.div>
  )
}

export default Carousel