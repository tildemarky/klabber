import { motion } from "framer-motion";
import { Bubble } from "styles/components/ConvoBubble.css";

const cardItem = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", bounce: 0.5 },
  },
  hidden: { opacity: 0, scale: 0 },
};

type Props = {
  type?: string;
  message: string;
  visited?: boolean;
};

export function ConvoBubble({ type, visited, message }: Props): JSX.Element {
  if (type === "reply") {
    return (
      // eslint-disable-next-line new-cap
      <motion.div variants={cardItem} className={Bubble({ color: "primary" })}>
        {message}
      </motion.div>
    );
  }
  return (
    <motion.div
      initial={visited ? "visible" : "hidden"}
      animate={visited ? false : "visible"}
      variants={cardItem}
      // eslint-disable-next-line new-cap
      className={Bubble({})}
    >
      {message}
    </motion.div>
  );
}
