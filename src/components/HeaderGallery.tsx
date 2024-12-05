import   { useState } from 'react';

type Category = 'all' | 'yunjin' | 'chaewoon' | 'sakura' | 'eunchae' | 'kazuha';

interface HeaderGalleryProps {
  onSelectCategory: (category: Category) => void;
}

const HeaderGallery = ({ onSelectCategory }: HeaderGalleryProps) => {
  const [activeButton, setActiveButton] = useState<Category | null>(null);

  const handleClick = (category: Category) => {
    setActiveButton(category);
    onSelectCategory(category);
    setTimeout(() => setActiveButton(null), 300); // Reset animation state
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto overflow-x-auto p-4 scrollbar-hide">
        <div className="grid grid-cols-6 min-w-[1230px] gap-4">
          {['all', 'yunjin', 'chaewoon', 'sakura', 'eunchae', 'kazuha'].map((category) => (
            <div
              key={category}
              className={`flex items-center md:justify-start justify-center min-w-[118px] px-4 py-2 rounded-full gap-1 ${
                category === 'all' ? 'bg-[#d1d1d1]' :
                category === 'yunjin' ? 'bg-[#87F9CF]' :
                category === 'chaewoon' ? 'bg-[#F9FF8B]' :
                category === 'sakura' ? 'bg-[#FF96B7]' :
                category === 'eunchae' ? 'bg-[#96B7FF]' :
                category === 'kazuha' ? 'bg-[#BE96FF]' : ''
              } ${activeButton === category ? 'bounce-animation' : ''}`}
              onClick={() => handleClick(category as Category)}
            >
              {category !== 'all' && (
                <img
                  src={`/assets/${category}.jpg`} 
                  alt={category}
                  className="h-[45px] w-[45px] rounded-full object-cover md:block hidden"
                />
              )}
              <button className="font-semibold font-poppins text-sm tracking-wide text-center">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderGallery;
