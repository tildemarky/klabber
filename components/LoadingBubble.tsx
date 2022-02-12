import { motion } from "framer-motion";
import { StyledLoadingBubble } from "styles/components/LoadingBubble.css";

const cardItem = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", bounce: 0.5 },
  },
  hidden: { opacity: 0, scale: 0 },
};

export function LoadingBubble(): JSX.Element {
  return <motion.div className={StyledLoadingBubble} variants={cardItem} />;
}
