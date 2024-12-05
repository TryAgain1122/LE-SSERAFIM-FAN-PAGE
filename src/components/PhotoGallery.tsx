import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { photoGalleryImage } from "../data";
import {Image} from "@nextui-org/react";

interface Photo {
  img: string;
}

interface PhotoGalleryProps {
  selectedCategory: keyof typeof photoGalleryImage;
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const PhotoGallery = ({ selectedCategory }: PhotoGalleryProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const photos = photoGalleryImage[selectedCategory] || photoGalleryImage.all;

  // Split the images into four columns
  const columns: Photo[][] = [[], [], [], []];
  photos.forEach((photo, index) => {
    columns[index % 4].push(photo);
  });

  return (
    <div className="py-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          {columns.map((column, columnIndex) => (
            <motion.div
              key={columnIndex}
              className="grid gap-4"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {column.map((photo, index) => (
                <motion.div
                  key={index}
                  layoutId={`photo-${index}`}
                  className="overflow-hidden cursor-pointer rounded-lg"
                  onClick={() => {
                    setIsLoading(true);
                    setSelectedPhoto(photo.img);
                  }}
                  variants={item}
                >
                  <Image
                    loading="lazy"
                    isZoomed
                    src={photo.img}
                    alt={photo.img}
                    className="h-auto max-w-full rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.1] object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for displaying the selected photo */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center overflow-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layoutId={`photo-${selectedPhoto}`}
              className="relative max-w-full max-h-full p-4"
            >
              {isLoading && (
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                  <span className="text-white">Loading...</span>
                </div>
              )}
              <motion.img
                loading="lazy"
                src={selectedPhoto}
                alt="Selected"
                className="rounded-lg object-cover"
                style={{ maxWidth: "100%", maxHeight: "90vh" }} // Ensuring the image fits the viewport
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onLoad={() => setIsLoading(false)} // Set loading state to false when the image loads
                onError={() => setIsLoading(false)} // Optionally handle error case
              />
            </motion.div>

            {/* Close button */}
            <motion.button
              className="fixed top-4 right-4 px-4 py-2 bg-white text-black rounded-lg z-100"
              onClick={() => setSelectedPhoto(null)}
              whileHover={{ scale: 1.1 }}
            >
              Close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGallery;
