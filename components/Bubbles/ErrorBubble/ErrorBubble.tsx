import { motion } from "framer-motion";
import { StyledCode, StyledError } from "./ErrorBubble.css";

type Props = {
  code: number;
  message: string;
};

function ErrorBubble({ code, message }: Props): JSX.Element {
  return (
    <motion.div className={StyledError}>
      <motion.span className={StyledCode}>{code}: </motion.span>
      {message}
    </motion.div>
  );
}

export default ErrorBubble;
