import { style } from "@vanilla-extract/css";

import { vars } from "../styles.css";

export const Choice = style({
  color: vars.color.primary,
  backgroundColor: "white",
  border: `2px solid ${vars.color.primary}`,
  padding: "0.5rem 1rem",
  borderRadius: vars.radii.full,
  selectors: {
    "&:hover": {
      backgroundColor: vars.color.primary,
      color: "white",
    },
  },
});
