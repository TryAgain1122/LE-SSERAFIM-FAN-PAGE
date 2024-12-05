
const HeroSection = () => {
  return (
    <div className="relative h-[80vh] z-10">
        <img 
            src="/assets/banner.jpeg"
            alt="Image"
            className="absolute inset-0 object-cover w-full h-full"
        />
        {/* OVERLAY */}
        <div className="absolute bg-black inset-0 bg-opacity-50"></div>
        {/* CONTENT */}
        <div className="relative z-10 flex justify-center items-center h-full text-white text-cente px-4">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 uppercase font-poppins">le sserafim</h1>
        </div>
    </div>
  )
}

export default HeroSection