import { motion } from "framer-motion";
import { StyledError, StyledCode } from "styles/components/ErrorBubble.css";

type Props = {
  code: number;
  message: string;
};

export function ErrorBubble({ code, message }: Props): JSX.Element {
  return (
    <motion.div className={StyledError}>
      <motion.span className={StyledCode}>{code}: </motion.span>
      {message}
    </motion.div>
  );
}
