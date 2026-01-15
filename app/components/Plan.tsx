"use client";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { planSteps as steps } from "../data/planSteps";
import { section } from "framer-motion/client";

export default function Plan({ active }: { active: string }) {
  const tabs = [
    "Onze aanpak",
    "Energielabels",
    "GACS",
    "Informatieplicht",
    "WKO-beheer",
    "Trainingen",
  ];

  // step component
  const Step = ({
    step,
    section,
  }: {
    step: { title: string; content: any };
    section?: any;
  }) => {
    const stepSection = useRef(null);
    const inView = useInView(stepSection, { amount: 0.2, once: true });

    return (
      <motion.div
        className="hover:cursor-pointer md:w-1/2 p-5 pl-0 md:py-15 py-5"
        ref={stepSection}
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 0.3, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        whileHover={{ opacity: 1, x: 20 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 1 }}
        // whileTap={{opacity:1,x:30}}
      >
        <h1 className="text-[#254055] font-bold text-3xl ">{step.title}</h1>
        <div className="text-[#4D4D4D] mt-3">{step.content}</div>
        {section ? <div>{section}</div> : null}
      </motion.div>
    );
  };

  const currentSteps = steps[tabs.indexOf(active)];

  return (
    <div className="md:px-24 md:mt-28 mt-10 ">
      {/* Plan title */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-[#254055] font-extrabold text-3xl">
          {currentSteps[0].header}
        </h1>
        <div className="mt-2 text-[#4D4D4D] md:max-w-1/2">
          {currentSteps[0].subtitle}
        </div>
      </motion.div>

      {/* steps - only pass items that have title and content */}
      <div className="flex flex-col md:mt-20 mt-10">
        {currentSteps.slice(1).map((step, index) => (
          <Step step={step as { title: string; content: any }} section={step.section} key={index} />
        ))}
      </div>
    </div>
  );
}
