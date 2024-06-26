import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wellTrackerImg from "@/public/WellTracker.png";
import CRMFundingImg from "@/public/CRMFundingImg.png";
import bloodLinkImg from "@/public/BloodLinkImg.png";
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
    title: "WellTracker",
    description:
      "A web application with integrated APIs that provides real-time health analytics and personalized health management tools.",
    tags: ['AWS Lambda', 'API Gateway', 'Healthcare',
      'Django', 'AWS', 'Cloud Computing', 'GitHub',
      'Beanstalk', 'CI/CD'],
    imageUrl: wellTrackerImg,
  },
  {
    title: "CRM Fundings",
    description:
      "Developed a secure and scalable personal finance management platform using Django and AWS, improving user experience and financial data management.",
    tags: ['Cloud Computing','CloudServices','AWS',
      'Django', 'Finance'],
    imageUrl: CRMFundingImg,
  },
  {
    title: "BloodLink",
    description:
      "BloodLink: Python web app for finding and managing blood bank information with secure deployment and automated testing.",
    tags: ['CI/CD', 'deployment', 'Django', 'BloodBank', 'AWS',
    'Cloud Computing', 'GitHub', 'Beanstalk'],
    imageUrl: bloodLinkImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Python",
  "Django",
  "Cloud Computing",
  "AWS",
  "CI/CD",
  "Git",
  "Github",
  "Beanstalk",
  "Illustrator",
  "Figma",
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
