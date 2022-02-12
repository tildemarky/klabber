import { recipe } from "@vanilla-extract/recipes";

import { vars } from "../styles.css";

export const Bubble = recipe({
  base: {
    backgroundColor: vars.color.lightestPrimary,
    borderRadius: vars.radii.full,
    padding: "0.75rem 1rem 0.75rem 1rem",
    position: "relative",
    margin: "0.25rem 0 1rem 0",
    alignSelf: "flex-start",
    maxWidth: "100%",
    wordBreak: "break-word",
    letterSpacing: "-0.004em",
    "@supports": {
      "(max-width: -webkit-fill-available)": {
        maxWidth: "-webkit-fill-available",
      },
    },
    selectors: {
      "&::after": {
        content: "",
        position: "absolute",
        zIndex: 0,
        left: "2px",
        top: "auto",
        right: "auto",
        bottom: "-10px",
        width: "0",
        height: "0",
        border: "1rem solid",
        transform: "rotate(35deg)",
        borderColor: `transparent transparent transparent ${vars.color.lightestPrimary}`,
      },
    },
  },

  variants: {
    color: {
      primary: {
        backgroundColor: vars.color.primary,
        color: "white",
        alignSelf: "flex-end",
        selectors: {
          "&::after": {
            content: "",
            position: "absolute",
            right: "0px",
            top: "auto",
            left: "auto",
            bottom: "-10px",
            width: "0",
            height: "0",
            border: "1rem solid",
            transform: "rotate(145deg)",
            borderColor: `transparent transparent transparent ${vars.color.primary}`,
          },
        },
      },
    },
  },
});
