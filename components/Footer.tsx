import { BaseLink } from "@comp/BaseLink";
import { motion } from "framer-motion";
import React from "react";
import { StyledFooter } from "styles/components/Footer.css";

import { useLang } from "../hooks/useLang";
import { common } from "../locales/common";

const items = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 100 },
  hover: { scale: 0.95 },
  tap: { scale: 0.85 },
};

type FooterProps = {
  disabled?: boolean;
};

export function Footer({ disabled }: FooterProps): JSX.Element {
  const lang = useLang();
  return (
    <motion.footer
      initial={disabled ? { opacity: 1 } : { opacity: 0 }}
      animate={disabled ? false : { opacity: 1 }}
      transition={{ delay: 6, duration: 2 }}
      className={StyledFooter}
    >
      <p>{common[lang].footer}</p>
      <p>
        All game data provided by{" "}
        <BaseLink
          text="RAWG"
          url="https://rawg.io/"
          whileHover="hover"
          whileTap="tap"
          variants={items}
        />
      </p>
    </motion.footer>
  );
}
