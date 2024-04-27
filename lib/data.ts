import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import nature1 from "@/public/nature1.jpeg";
import nature2 from "@/public/nature2.jpeg";
import nature3 from "@/public/nature3.jpeg";
import nature4 from "@/public/nature4.jpeg";
import nature5 from "@/public/nature5.jpeg";
import nature6 from "@/public/nature6.jpeg";
import nature7 from "@/public/nature7.jpeg";
import nature8 from "@/public/nature8.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Hobbies",
    hash: "#hobbies",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.E. Computer Engineering",
    location: "Mumbai, India",
    description:
      "I graduated after 4 years of studying. The I decided to persue my futher studies.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2023",
  },
  {
    title: "Co-General Secratary, CSI-DMCE",
    location: "Mumbai, India",
    description:
      "I managed and led a team of 150 students and organized various seminars, workshops and competitions.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "MSc Cloud Computing",
    location: "Dublin, Ireland",
    description:
      "I'm now a full-time student at NIC, Dublin. Persuing my Master's degree in cloud computing.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

export const naturePhotos = [
  {
    link: nature1
  },
  {
    link: nature2
  },
  {
    link: nature3
  },
  {
    link: nature4
  },
  {
    link: nature5
  },
  {
    link: nature6
  },
  {
    link: nature7
  },
  {
    link: nature8
  },
] as const;
