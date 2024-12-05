import { useEffect, useRef } from "react";

interface Props {
  images: { src: string; }[];
  currentIndex: number;
  onThumbnailClick: (index: number) => void;
}

const Thumbnail = ({ images, currentIndex, onThumbnailClick }: Props) => {
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Ensure thumbnailRefs is correctly initialized when images change
  useEffect(() => {
    thumbnailRefs.current = Array(images.length).fill(null);
  }, [images]);

  useEffect(() => {
    if (thumbnailRefs.current[currentIndex]) {
      thumbnailRefs.current[currentIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [currentIndex]);

  return (
    <div className="absolute bottom-10 left-[52%] transform -translate-x-1/2 flex space-x-4 overflow-x-auto w-full p-4">
      <div className="flex space-x-4">
        {images.map((image, index) => (
          <div
            key={image.src} // Use a unique key if available
            className={`w-28 h-36 flex-shrink-0 overflow-hidden rounded-lg transition-transform duration-500 ${
              index === currentIndex ? 'transform scale-110' : ''
            }`}
            ref={(el) => (thumbnailRefs.current[index] = el)}
            onClick={() => onThumbnailClick(index)}
          >
            <img
              src={image.src}
              alt={image.src}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Thumbnail;
