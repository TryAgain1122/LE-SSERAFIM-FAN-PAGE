import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface musicCardProps {
  imgSrc: string;
  musciName: string;
}

const MusicCard = ({ imgSrc, musciName }: musicCardProps) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden h-72 w-64 min-w-[256px] rounded-xl flex justify-center"
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div className="absolute inset-0 z-10 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full rounded-lg" />
            <motion.h1 className="bg-white font-semibold font-poppins text-sm z-10 px-3 py-2 rounded-full shadow-lg flex items-center gap-3 cursor-pointer"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                exit={{ y: 10 }}
            >
              <span>{musciName}</span>
              <FaArrowUpRightFromSquare />
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      <img
        src={imgSrc}
        alt={imgSrc}
        className="w-full h-full object-cover shadow-lg cursor-pointer"
      />
    </motion.div>
  );
};

export default MusicCard;
