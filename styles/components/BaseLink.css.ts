import { style } from "@vanilla-extract/css";

import { vars } from "../styles.css";

export const StyledLink = style({
  display: "block",
  color: vars.color.primary,
  fontWeight: "bold",
  textDecoration: "none",
});
