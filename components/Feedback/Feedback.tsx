import { useLang } from "@hooks/useLang";
import { common } from "@locales/common";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import { FeedbackGroup, FeedbackText } from "./Feedback.css";

const response = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
  hidden: { opacity: 0 },
};

type FeedbackProps = {
  question?: boolean;
  children: React.ReactNode;
};

const Feedback = forwardRef<HTMLDivElement, FeedbackProps>((props, ref) => {
  const lang = useLang();
  if (props.question) {
    return (
      <motion.div className={FeedbackGroup} ref={ref} variants={response}>
        <aside className={FeedbackText}>{common[lang].feedback}</aside>
        {props.children}
      </motion.div>
    );
  }

  return (
    <motion.div ref={ref} variants={response} className={FeedbackGroup}>
      {props.children}
    </motion.div>
  );
});
Feedback.displayName = "Feedback";

export default Feedback;
