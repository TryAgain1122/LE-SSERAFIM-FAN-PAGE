import { memberListImage } from "../data.ts";
import MemberListCard from "./MemberListCard";
import { motion, useInView } from "framer-motion"; // Import motion and useInView
import { useRef } from "react";

// Define container and item animations
const containerVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2, // Controls the delay between the appearance of children
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 }, // Start position (lower and transparent)
  visible: {
    y: 0, // Final position
    opacity: 1, // Fully visible
    transition: { duration: 0.6 }, // Duration of the animation for each item
  },
};

const Members = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' }); // Detect when the component is in view with some margin for earlier trigger

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex px-4 items-center mb-16">
          <hr className="flex-1 border border-gray-300" />
          <h1 className="font-bold text-3xl mx-4 text-center uppercase font-poppins">
            members
          </h1>
          <hr className="flex-1 border border-gray-300" />
        </div>

        {/* Animate the grid container with Framer Motion */}
        <motion.div
          ref={ref} // Attach ref to detect scroll into view
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4"
          variants={containerVariants} // Use container variants
          initial="hidden" // Start with the hidden state
          animate={isInView ? "visible" : "hidden"} // Animate to visible state when in view
        >
          {memberListImage.map((memberList, index) => (
            <motion.div
              key={index}
              variants={itemVariants} // Use item variants for each card
            >
              <MemberListCard
                name={memberList.name}
                image={memberList.img}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Members;
