import { motion } from "framer-motion";
import PhotoGallery from "../components/PhotoGallery";
import HeaderGallery from "../components/HeaderGallery";
import { useState, useEffect } from "react";

type Category = 'all' | 'yunjin' | 'chaewoon' | 'sakura' | 'eunchae' | 'kazuha';

const Gallery = () => {
  const [selectCategory, setSelectedCategory] = useState<Category>('all');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSelectedCategory = (category: Category) => {
    setIsLoading(true); // Start loading when category changes
    setSelectedCategory(category);
  };

  // Simulate a loading delay to fetch data or images
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false); // End loading after delay
    }, 500); // Adjust the delay as needed
    return () => clearTimeout(timeout);
  }, [selectCategory]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gradient-to-r from-violet-400 to-purple-300 min-h-screen"
    >
      <HeaderGallery onSelectCategory={handleSelectedCategory} />
      
      {/* Display Loader or PhotoGallery */}
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <div className="w-16 h-16 border-4 border-purple-600 border-dotted rounded-full animate-spin"></div>
        </div>
      ) : (
        <PhotoGallery selectedCategory={selectCategory} />
      )}
    </motion.div>
  );
};

export default Gallery;
