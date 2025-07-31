"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FAQItemProps } from "@/types/faq";

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="bg-white90 py-8 px-8 w-full h-fit rounded-lg cursor-pointer"
    >
      <h3 className="flex items-center justify-between gap-4">
        <span className="text-white10 text-p font-bold text-start">{question}</span>
        <span className={`transition-transform duration-300 ${isOpen ? "rotate-[225deg]" : ""}`}>
          <FaPlus className="text-white25 w-4 h-4" />
        </span>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-white25 text-p mt-4 text-start"
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}