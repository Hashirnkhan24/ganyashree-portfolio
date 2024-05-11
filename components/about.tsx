"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 sm:mt-8 max-w-[45rem] text-center leading-8 sm:mb-28 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="bg-[#fdbabc] absolute -z-10 md:h-[31.25rem] h-[10rem] w-[10rem] md:w-[31.25rem] rounded-full blur-[10rem] dark:bg-[#ffffff] opacity-20 mx-auto"></div>
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hi, I'm <span className="font-medium">Ganyashree Suvarna</span>,
        currently diving into the world of Cloud Computing at the National
        College of Ireland. With a background in Computer Engineering, I found
        my passion for development during my undergrad days, mastering{" "}
        <span className="font-medium"> full-stack development. </span>.{" "}
        <span className="italic">
          Fascinated by the endless possibilities of cloud technologies,{" "}
        </span>
        I decided to specialize further, blending my love for coding with an
        interest in designing robust cloud solutions.
        <span className="underline"> I immerse myself</span> in wandering in
        nature and capturing the empeheral beauty of it alongwith that I like
        ditgital art too.{" "}
      </p>
    </motion.section>
  );
}
