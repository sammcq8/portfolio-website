import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import handwritingRobotImg from "@/public/handwritingRobot.jpg";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Experience 1",
    location: "location",
    description:
      "A description of the things I did",
    icon: React.createElement(FaReact),
    date: "2019",
  },
  {
    title: "Experience 2",
    location: "Location 2",
    description:
      "Another description of the things I did at this other place",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Handwriting Robot",
    description:
      "I worked with the Projects Committee of Women in Computing at RIT to help rebuild this handwriting robot.",
    tags: ["Collaboration", "3D Modeling", "Physical Fabrication"],
    imageUrl: handwritingRobotImg,
  },
] as const;

export const skillsData = [
  "Skills",
  "I",
  "Have",
  // "TypeScript",
  // "React",
  // "Next.js",
  // "Node.js",
  // "Git",
  // "Tailwind",
  // "Prisma",
  // "MongoDB",
  // "Redux",
  // "GraphQL",
  // "Apollo",
  // "Express",
  // "PostgreSQL",
  // "Python",
  // "Django",
  // "Framer Motion",
] as const;
export const firstName: String = "Name" as const
export const major: String = "Major" as const
export const year: String = "0th year" as const
export const loveToDo = "Something" as const
export const email = "example@gmail.com" as const
export const linkedin = "https://www.linkedin.com" as const
export const github = "https://www.github.com" as const
