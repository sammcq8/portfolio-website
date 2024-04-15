"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { major } from "@/lib/data";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am currently a student at Rochester Institute of Technology majoring
        in {" "}<span className="font-medium">{major}</span>. I am a member
        of the Women in Computing orginzation at RIT, and a part of the projects
        committee in WiC. In projects we make cool projects with hardware and 
        software like a handwriting robot and an arcade cabinet!
      </p>
    </motion.section>
  );
}
