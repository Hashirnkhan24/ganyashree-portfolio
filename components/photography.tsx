"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion"; // Importing motion and useAnimation
import { naturePhotos } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { BsPinAngleFill } from "react-icons/bs";

const Photography = () => {
  const [activeImage, setActiveImage] = useState(0);
  const controls = useAnimation(); // Initializing controls for animation
  const { ref } = useSectionInView("Hobbies");

  const clickNext = () => {
    setActiveImage((activeImage + 1) % naturePhotos.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  // Motion variant for the image container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section ref={ref} id="hobbies" className="scroll-mt-28">
      <SectionHeading>My Hobby - Capturing the Blooms!</SectionHeading>
      <main className="grid place-items-center w-full mx-auto max-w-screen-xl mb-20 sm:mb-32">
        <div className=" mt-4 px-[1rem] pt-[1rem] pb-[5rem] bg-gradient-to-tr from-gray-100 via-gray-200 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rotate-6 flex flex-col items-center justify-center">
          <BsPinAngleFill className="text-slate-800 dark:text-slate-400 text-2xl sm:text-3xl gap-2 mt-[-2rem] mb-[1rem]" />
          <motion.div
            className="relative sm:w-[55vb] sm:h-[55vh] w-[25vb] h-[25vh] overflow-hidden shadow-lg"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {naturePhotos.map((elem, idx) => (
              <motion.div
                key={idx}
                className={`absolute top-0 left-0 w-full h-full`}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: idx === activeImage ? 1 : 0,
                  zIndex: idx === activeImage ? 10 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={elem.link}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  // className="rounded-md"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default Photography;
