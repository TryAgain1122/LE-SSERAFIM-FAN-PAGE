import { Link } from "react-router-dom";

interface NavbarProps {
  textColor: string;
}

const Navbar = ({textColor}:NavbarProps) => {
  return (
    <div className={`w-[1140px] max-w-[80%] flex items-center md:justify-start justify-center mt-8 absolute left-16 z-10 ${textColor}`}>
      <nav className="flex space-x-10 font-poppins">
        <Link to="/" className="relative group">
          Home
          <span className="block w-full h-0.5 bg-current transition-all duration-300 scale-x-0 group-hover:scale-x-100 absolute bottom-0 left-0"></span>
        </Link>
        <Link to="/contacts" className="relative group">
          Contact
          <span className="block w-full h-0.5 bg-current transition-all duration-300 scale-x-0 group-hover:scale-x-100 absolute bottom-0 left-0"></span>
        </Link>
        <Link to="/about" className="relative group">
          About
          <span className="block w-full h-0.5 bg-current transition-all duration-300 scale-x-0 group-hover:scale-x-100 absolute bottom-0 left-0"></span>
        </Link>
        <Link to="/gallery" className="relative group">
          Gallery
          <span className="block w-full h-0.5 bg-current transition-all duration-300 scale-x-0 group-hover:scale-x-100 absolute bottom-0 left-0"></span>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
