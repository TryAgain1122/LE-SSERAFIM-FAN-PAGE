
import Awards from "../components/Awards";
import Content from "../components/Content";
import Debut from "../components/Debut";
import HeroSection from "../components/HeroSection";
import Members from "../components/Members";
import Music from "../components/Music";
import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";

// Define animation variants
const pageVariants = {
  initial: {
    opacity: 0, // Start with 0 opacity (invisible)
    y: 50, // Start with some vertical offset (slide-up effect)
    scale: 0.95, // Slightly smaller scale to give a pop-in effect
  },
  animate: {
    opacity: 1, // Fully visible
    y: 0, // No vertical offset, component at its final position
    scale: 1, // Normal scale (1)
    transition: {
      duration: 0.8, // Slower transition duration for smoother effect
      ease: [0.6, -0.05, 0.01, 0.99], // Custom easing for a smoother transition
    },
  },
  exit: {
    opacity: 0, // Fade out
    y: 50, // Slide down when exiting
    transition: { duration: 0.6 }, // Exit duration
  },
};

const About = () => {
  // const [textColor, setTextColor] = useState('text-black');

  // useEffect(() => {
  //   const backgroundColor = "white";
  //   if (backgroundColor === "white") {
  //     setTextColor("text-black")s
  //   } else {
  //     setTextColor("text-white")
  //   }
  // },[])
  return (
    <motion.div
      className="relative min-h-screen overflow-hidden bg-white"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants} // Apply the animation variants
    >
      {/* <Navbar textColor={textColor}/> */}
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        {/* Decorative Blurred Circle */}
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>

      {/* Main Content */}
      <HeroSection />
      <Content />
      <Members />
      <Debut />
      <Music />
      <Awards />
    </motion.div>
  );
};

export default About;
