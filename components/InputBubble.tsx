import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

import {
  Box,
  InputSection,
  Input,
  Span,
  SpanContainer,
  RegularSpan,
  Submit,
  SubmitSvg,
} from "../styles/components/InputBubble.css";

const cardItem = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", bounce: 0.25 },
  },
  hidden: { opacity: 0, scale: 0 },
};

export type Ref = HTMLInputElement;

type Props = {
  text: string;
  visited: boolean;
  setText: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const InputBubble = React.forwardRef<Ref, Props>((props, ref) => {
  const [active, setActive] = useState(false);
  const [activeWidth, setActiveWidth] = useState("50%");

  useEffect(() => {
    const width = window.innerWidth;
    if (width <= 400) {
      setActiveWidth("100%");
    }
  }, []);

  return (
    <motion.form
      className={`${Box}`}
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        props.handleSubmit(e);
      }}
      variants={cardItem}
    >
      {!props.visited && !active && (
        <span className={SpanContainer}>
          <span className={Span} />
          <span className={RegularSpan} />
        </span>
      )}

      <div className={InputSection}>
        <input
          className={Input}
          ref={ref}
          type="text"
          id="query"
          required
          minLength={8}
          aria-label="Enter what you're searching for"
          value={props.text}
          onChange={(e) => {
            if (activeWidth !== "100%") {
              setActiveWidth(
                e.target.value.length > 50
                  ? `${e.target.value.length.toString()}%`
                  : activeWidth
              );
            }
            props.setText(e.target.value);
          }}
          onClick={() => {
            setActive(true);
          }}
        />
        <motion.button
          className={Submit}
          type="submit"
          aria-label="Submit"
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.85 }}
          disabled={props.text.length < 8}
        >
          <svg
            className={SubmitSvg}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </motion.button>
      </div>
    </motion.form>
  );
});
