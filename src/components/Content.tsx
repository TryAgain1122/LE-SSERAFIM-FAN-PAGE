import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Content = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation once when in view

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 }, // Start hidden with some translate Y
    visible: {
      opacity: 1,
      y: 0, // Reset translate Y to 0
      transition: { duration: 1, ease: "easeOut" }, // Adjust timing here
    },
  };

  return (
    <div className="py-16 bg-white">
      <motion.div
        ref={ref} // Attach ref for scroll detection
        className="max-w-7xl mx-auto px-4 flex items-center"
        variants={textVariants} // Add animation variants
        initial="hidden" // Initial hidden state
        animate={isInView ? "visible" : "hidden"} // Trigger animation when in view
      >
        <hr className="flex-1 border-t border-gray-300" />
        <motion.h1 className="mx-4 text-3xl uppercase font-bold text-center">
          Le sserafim
        </motion.h1>
        <hr className="flex-1 border-t border-gray-300" />
      </motion.div>

      <motion.div
        className="max-w-7xl w-[70%] mx-auto px-4 py-16"
        ref={ref} // Attach ref for the scroll animation
        variants={textVariants} // Use the same animation variants
        initial="hidden" // Start hidden
        animate={isInView ? "visible" : "hidden"} // Animate when in view
      >
        <p className="font-poppins tracking-wide leading-relaxed">
          LE SSERAFIM is a South Korean girl group formed by Source Music, a
          subsidiary of HYBE Corporation. The group's name, LE SSERAFIM, is an
          anagram of the phrase "I'm Fearless," which reflects their theme of
          fearlessness, confidence, and self-empowerment. They made their debut
          on May 2, 2022, with the mini-album FEARLESS, showcasing a bold,
          contemporary sound and dynamic choreography.
          <br />
          <br />
          LE SSERAFIM initially debuted with five members: Sakura, Chaewon,
          Yunjin, Kazuha, and Eunchae. Their music often explores themes of
          empowerment, resilience, and individuality, blending elements of pop,
          R&B, and EDM with catchy hooks and polished production. Known for
          their powerful stage presence, captivating visuals, and synchronized
          dance performances, LE SSERAFIM has quickly gained a strong following
          both in South Korea and internationally, becoming one of the rising
          stars in the K-pop industry.
        </p>
      </motion.div>
    </div>
  );
};

export default Content;
