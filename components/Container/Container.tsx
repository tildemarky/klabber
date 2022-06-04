import { motion } from "framer-motion";
import StyledContainer from "./Container.css";

type MainProps = {
  visited?: boolean;
  children: React.ReactNode;
};

const cardList = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.75,
    },
  },
  hidden: { opacity: 0 },
};
const visitedList = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
    },
  },
  hidden: { opacity: 0 },
};

function Main({ visited, children }: MainProps): JSX.Element {
  return (
    <motion.main
      className={StyledContainer}
      initial="hidden"
      animate="visible"
      variants={visited ? visitedList : cardList}
    >
      {children}
    </motion.main>
  );
}

export default Main;
