import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Debut = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' }); // Trigger when 100px before the element is in view

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center px-4 mb-10">
          <hr className="flex-1 border border-gray-300" />
          <h1 className="text-3xl uppercase font-bold font-poppins text-center px-4">
            Debut
          </h1>
          <hr className="flex-1 border border-gray-300" />
        </div>
        <div className="max-w-7xl w-[70%] mx-auto" ref={ref}>
          {/* Year text animation */}
          <motion.h1
            style={{ overflow: 'hidden', whiteSpace: 'nowrap'}}
            className="font-bold uppercase text-4xl mb-10"
            initial={{ width: 0 }} // Start from the left and hidden
            animate={isInView ? { width: '100%' } : {}} // Slide in when in view
            transition={{ duration: 3, ease: "easeOut" }} // Smooth transition
          >
            2022.05.02
          </motion.h1>

          {/* Paragraph text reveal with scrolling */}
          <motion.p
            className="tracking-wide leading-relaxed font-poppins font-light"
            initial={{ opacity: 0, y: 50 }} // Start from below and invisible
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate into view
            transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth reveal
          >
            LE SSERAFIM is a girl group with SOURCE MUSIC, a label under HYBE,
            consisting of five members of different nationalities: SAKURA, KIM
            CHAEWON, HUH YUNJIN, KAZUHA, and HONG EUNCHAE. The first girl group
            to launch through a collaboration between HYBE and SOURCE MUSIC,
            they are taking a daring stance and saying right from the outset
            that they will stand at the very top. The group’s name, LE SSERAFIM,
            is an anagram of the words “I’M FEARLESS.” The name captures the
            group’s self-confidence and iron will as they go out into the world
            fearlessly and unwavering before the watchful eyes of the world. It
            is like an incantation to...
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Debut;
