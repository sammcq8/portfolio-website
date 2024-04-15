import React from "react";
import { CgCalibrate, CgCap, CgCloud, CgLaptop, CgVolume, CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import handwritingRobotImg from "@/public/handwritingRobot.jpg";
import sipSageImg from "@/public/SipSage.png"
import { LuAccessibility, LuGraduationCap } from "react-icons/lu";
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
    title: "Northrop Grumman Mission Systems Intern",
    location: "Baltimore, MD",
    description:
      "At Northrop I helped extend an internal system for tracking the production of semiconductors with C#",
    icon: React.createElement(CgWorkAlt),
    date: "May 2020 - August 2020",
  },
  {
    title: "Liberty Mutual Techstart Intern",
    location: "Portsmouth, NH",
    description:
      "At Liberty I worked with the cloud expansion team to build a configuration system using AWS Lambda & DocumentDB",
    icon: React.createElement(CgCloud),
    date: "May 2021 - August 2021",
  }, {
    title: "HubSpot Backend Engineering Co-op",
    location: "Boston, MA",
    description:
      "At HubSpot I worked with the Access Managment group to help build systems for user settings management with Java Microservices.",
    icon: React.createElement(CgLaptop),
    date: "January 2022 - May 2022",
  }, {
    title: "Amazon Robotics Intern",
    location: "Reading, MA",
    description:
      "At Amazon I worked in Kotlin to build accessibility features into human-robot interaction systems used in the Amazon Warehouses.",
    icon: React.createElement(LuAccessibility),
    date: "May 2022 - August 2022",
  },
  {
    title: "HubSpot Backend Engineering Co-op",
    location: "Boston, MA",
    description:
      "I returned to HubSpot to work with the User Setup team to increase the reliability of essential HubSpot services using Netflix's Hollow Framework.",
    icon: React.createElement(CgLaptop),
    date: "January 2023 - August 2023",
  },
  {
    title: "HubSpot SWE",
    location: "Boston, MA",
    description:
      "I'm excited to rejoin HubSpot after I graduate!",
    icon: React.createElement(LuGraduationCap),
    date: "August 2024 onward",
  }
] as const;

export const projectsData = [
  {
    title: "SipSage",
    description:
      "I worked with my friend to build SipSage, a quiz application to recommend coffee & tea from female founded companies." +
      " We won the Constellation Brands Elevating Female Founders award at WiCHacks 2024",
    tags: ["Next.js", "3D Typescript", "Vercel"],
    imageUrl: sipSageImg,
    url: "http://sipsage.co"
  },
  {
    title: "Handwriting Robot",
    description:
      "I worked with the Projects Committee of Women in Computing at RIT to help rebuild this handwriting robot.",
    tags: ["Collaboration", "3D Modeling", "Physical Fabrication"],
    imageUrl: handwritingRobotImg,
  },
] as const;

export const skillsData = [
  "Java",
  "AWS Lambda",
  "Typescript",
  "Netflix Hollow",
  "AWS DocumentDb",
  "Next.js",
  // "Node.js",
  "Git",
  "Tailwind",
  // "Prisma",
  // "MongoDB",
  // "Redux",
  // "GraphQL",
  // "Apollo",
  // "Express",
  "PostgreSQL",
  "Python",
  // "Django",
  // "Framer Motion",
] as const;
export const firstName: String = "Sam" as const
export const major: String = "Software Engineering" as const
export const year: String = "5th year" as const
export const loveToDo = "build things that help people" as const
export const email = "slm1906@rit.edu" as const
export const linkedin = "https://www.linkedin.com/in/samantha-mcquate" as const
export const github = "https://www.github.com/sammcq8" as const
