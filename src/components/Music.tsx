import { animate, useMotionValue, motion } from "framer-motion";
import { musicList } from "../data.ts";
import MusicCard from "./MusicCard";
import useMeasure from 'react-use-measure';
import { useEffect, useState } from "react";

const Music = () => {

  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION)

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  
  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: 'linear',
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete:() => {
          setMustFinish(false);
          setRerender(!rerender)
        },
      })
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      })
    }

   
    return () => controls?.stop();
  }, [xTranslation, width, duration, rerender]);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto mb-16">
        <div  className="flex items-center justify-center">
          <hr className="flex-1 border border-gray-300"/>
          <h1 className="font-bold font-poppins text-3xl uppercase px-4">Music</h1>
          <hr className="flex-1 border border-gray-300"/>
        </div>
      </div>
      <motion.div 
        className="relative left-0 flex gap-6 "
        ref={ref}
        style={{x: xTranslation}}
        onHoverStart={() => {
          setMustFinish(true)
          setDuration(SLOW_DURATION)
        }}
        onHoverEnd={() => {
          setMustFinish(true)
          setDuration(FAST_DURATION)
        }}
      >
        {[...musicList, ...musicList].map((music, index) => (
          <MusicCard 
            key={index}
            imgSrc={music.music}
            musciName={music.name}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Music;
