"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { data } from "../data/faq";

export default function Faq() {
  const services = [
    "Algemene vragen",
    "Energielabels",              
    "GACS",
    "Informatieplicht",
    "WKO-beheer",
    "Trainingen",
  ];
  const [active, setActive] = useState<string>("Algemene vragen");
  const [open, setOpen] = useState<number | null>(null);

  const toggleActive = ({ title }: { title: string }) => {
    setActive(title);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  } as const;

  const toggleOpen = (index: number | null) => {
    setOpen(index);
  };

  useEffect(() => {
    setOpen(null);
  }, [active]);

  return (
    <div
      className="flex flex-col items-center"
      style={{ fontFamily: "Poppins" }}
    >
      <SectionTitle
        title="FAQ"
        span={
          <div className="md:text-4xl text-2xl font-extrabold text-center">
            <span className="text-[#254055]">Veelgestelde </span>
            <span className="text-[#81C713]">vragen</span>
          </div>
        }
      />
      <div className="text-[#254055] flex gap-3 md:mt-13 mt-10 md:max-w-3/4">
        {/* services */}
        <div className="flex flex-col gap-2">
          {data.map((faq, index) => (
            <div key={index} className="flex flex-col gap-2">
              <motion.button
                onClick={() => toggleActive({ title: faq.title })}
                key={index}
                className={`md:mx-0 mx-10 text-left font-semibold rounded-lg pl-5 md:pr-40 text-nowrap py-4 hover:cursor-pointer transition-colors duration-200 ${
                  active === faq.title
                    ? "bg-[#F0F8E2]"
                    : "bg-[#F6F6F6] hover:bg-[#f0f8e2b5]"
                }`}
              >
                {faq.title}
              </motion.button>
              {active === faq.title ? (
                <motion.div
                  key={active}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="lg:hidden flex flex-col gap-2 mx-5 mt-1"
                >
                  {data[services.indexOf(active)].faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-[#F0F8E2] py-4 rounded-xl pl-2 relative"
                    >
                      <motion.div
                        className="bg-[#254055] size-3 rounded absolute"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.1 + index * 0.08,
                          duration: 0.3,
                        }}
                      />
                      <motion.button
                        onClick={() =>
                          toggleOpen(open === index ? null : index)
                        }
                        className="w-2 h-0.5 rounded absolute right-3 text-xl flex justify-center items-center p-3"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          delay: 0.15 + index * 0.08,
                          duration: 0.3,
                        }}
                      >
                        {open === index ? "-" : "+"}
                      </motion.button>
                      <div className="">
                        <h1
                          className="text-[13px] mx-6 mr-10 hover:cursor-pointer"
                          onClick={() =>
                            toggleOpen(open === index ? null : index)
                          }
                        >
                          {faq.question}
                        </h1>
                        <motion.div
                          initial={false}
                          animate={{
                            height: open === index ? "auto" : 0,
                            opacity: open === index ? 1 : 0,
                          }}
                          transition={{
                            height: { duration: 0.3, ease: "easeInOut" },
                            opacity: { duration: 0.2, ease: "easeInOut" },
                          }}
                          style={{ overflow: "hidden" }}
                        >
                          <p className="text-[#808080] mt-2 text-xs mr-2 mx-6">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : null}
            </div>
          ))}
        </div>

        {/* FAQs */}
        <motion.div
          key={active}
          variants={containerVariants}
          initial="visible"
          className="lg:flex hidden flex-col gap-2"
        >
          {data[services.indexOf(active)].faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-[#F0F8E2] p-4 rounded-xl pl-16 relative`}
            >
              <motion.div
                className="bg-[#254055] size-3 rounded absolute left-3 top-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.3 }}
              />
              <motion.button
                onClick={() => toggleOpen(open === index ? null : index)}
                className="w-3 h-0.5 text-3xl rounded absolute right-5 hover:cursor-pointer p-3 flex justify-center items-center"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.15 + index * 0.08, duration: 0.3 }}
              >
                {open === index ? "-" : "+"}
              </motion.button>
              <div className={`${open === index ? "pr-5" : "pr-20"}`}>
                <h1
                  className="hover:cursor-pointer"
                  onClick={() => toggleOpen(open === index ? null : index)}
                >
                  {faq.question}
                </h1>
                <motion.div
                  initial={false}
                  animate={{
                    height: open === index ? "auto" : 0,
                    opacity: open === index ? 1 : 0,
                  }}
                  transition={{
                    height: { duration: 0.3, ease: "easeInOut" },
                    opacity: { duration: 0.2, ease: "easeInOut" },
                  }}
                  style={{ overflow: "hidden" }}
                >
                  <p className="text-[#808080] mt-2 text-[15px]">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
