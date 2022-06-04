import { vars } from "@style/vars.css";
import { style } from "@vanilla-extract/css";

const StyledLink = style({
  display: "block",
  color: vars.color.primary,
  fontWeight: "bold",
  textDecoration: "none",
});

export default StyledLink;
