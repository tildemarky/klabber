import { motion } from "framer-motion";
import { Choice } from "styles/components/Choices.css";

import { useLang } from "../hooks/useLang";
import { common } from "../locales/common";

type ChoiceProps = {
  variant: "good" | "bad" | "reset";
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
};

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
  tap: { scale: 0.85 },
  hover: { scale: 0.95 },
};

export function Choices({ variant, onClick }: ChoiceProps): JSX.Element {
  const lang = useLang();
  return (
    <>
      {variant === "good" && (
        <motion.button
          id="good"
          type="button"
          whileHover="hover"
          whileTap="tap"
          variants={item}
          onClick={onClick}
          className={Choice}
        >
          {common[lang].positive}
        </motion.button>
      )}
      {variant === "bad" && (
        <motion.button
          id="bad"
          type="button"
          whileHover="hover"
          whileTap="tap"
          variants={item}
          onClick={onClick}
          className={Choice}
        >
          {common[lang].negative}
        </motion.button>
      )}
      {variant === "reset" && (
        <motion.button
          id="reset"
          type="button"
          whileHover="hover"
          whileTap="tap"
          variants={item}
          onClick={onClick}
          className={Choice}
        >
          {common[lang].reset}
        </motion.button>
      )}
    </>
  );
}
