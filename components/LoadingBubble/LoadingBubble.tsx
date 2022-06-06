import { motion } from "framer-motion";
import { Loader, StyledLoadingBubble } from "./LoadingBubble.css";

const cardItem = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", bounce: 0.5 },
  },
  hidden: { opacity: 0, scale: 0 },
};

function LoadingBubble(): JSX.Element {
  return (
    <motion.div className={StyledLoadingBubble} variants={cardItem}>
      <svg
        version="1.1"
        id="L4"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 0 0"
        className={Loader}
      >
        <circle fill="currentColor" stroke="none" cx="6" cy="50" r="6">
          <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1" />
        </circle>
        <circle fill="currentColor" stroke="none" cx="26" cy="50" r="6">
          <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2" />
        </circle>
        <circle fill="currentColor" stroke="none" cx="46" cy="50" r="6">
          <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3" />
        </circle>
      </svg>
    </motion.div>
  );
}

export default LoadingBubble;
