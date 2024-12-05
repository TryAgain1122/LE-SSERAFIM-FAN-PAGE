import { AwardsList } from "../data.ts";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Awards = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="flex max-w-7xl items-center mx-auto px-4 mb-10">
        <hr className="flex-1 border border-gray-300" />
        <h1 className="font-bold font-poppins text-3xl px-4">Awards</h1>
        <hr className="flex-1 border border-gray-300" />
      </div>
      {AwardsList.map((awardYear, yearIndex) => (
        <div key={yearIndex} className="max-w-7xl mx-auto px-4 mb-8">
          <h2 className="text-3xl font-poppins font-semibold mb-4 text-center">
            {awardYear.year}
          </h2>
          {awardYear.awards.map((awardItem, awardIndex) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: '-100px' }); // Trigger when close to view

            return (
              <div
                key={awardIndex}
                ref={ref}
                className={`flex flex-col md:flex-row ${awardIndex % 2 === 0 ? "md:justify-start" : "md:justify-end"} my-4`}
              >
                <motion.div
                  className="bg-gray-200 p-4 rounded-md max-w-full md:max-w-sm mx-auto md:mx-0"
                  initial={{ opacity: 0, x: awardIndex % 2 === 0 ? -100 : 100 }} // Start from left or right
                  animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate into view
                  transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-lg font-poppins">{awardItem.title}</h3>
                  </div>
                  <ul className="text-base text-gray-700 space-y-1 font-satisfy">
                    {awardItem.categories.map((category, categoryIndex) => (
                      <li key={categoryIndex}>- {category}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Awards;