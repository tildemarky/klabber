import { motion } from "framer-motion";
import React from "react";
import { Box } from "styles/components/SuggestionBox.css";

const suggest = {
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  hidden: { opacity: 0, scale: 0, x: -500 },
};

type BoxProps = {
  children?: React.ReactNode;
};

export function SuggestionBox({ children }: BoxProps): JSX.Element {
  return (
    <motion.div
      className={Box}
      initial="hidden"
      animate="visible"
      variants={suggest}
    >
      {children}
    </motion.div>
  );
}
