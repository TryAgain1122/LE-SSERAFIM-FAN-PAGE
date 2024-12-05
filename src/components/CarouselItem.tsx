interface CarouselItemProps {
    video: {
        src: string;
        name: string;
        description: string;
    };
    isActive: boolean;
}

const CarouselItem = ({video, isActive}:CarouselItemProps) => {
  return (
    <div className={`absolute inset-0 h-[100vh] transition-all duration-700 ${isActive ? 'opacity-100': 'opacity-0'}`}>
        <video 
            src={video.src}
            className="w-full h-full object-cover overflow-hidden"
            autoPlay
            muted
            loop
        />
        {/* backdrop */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* text content */}
        <div className={`absolute md:top-1/4 top-1/3 left-8 ml-4 m1-1 text-white p-8 z-10 max-w-lg ${isActive ? 'slide-in' : ''}`}>
            <h1 className="text-4xl lg:text-5xl font-bold">{video.name}</h1>
            <p className="hidden md:block mt-2 lg:mt-4 text-lg lg:text-sm">{video.description}</p>
            <div className="mt-6 space-x-4">
                <button className="bg-white text-black py-2 px-4 shadow-md rounded-lg">See More</button>
                <button className="border border-white text-white py-2 px-4 rounded-lg">
                    Welcome
                </button>
            </div>
        </div>
    </div>
  )
}

export default CarouselItem