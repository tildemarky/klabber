import { vars } from "@style/vars.css";
import { style } from "@vanilla-extract/css";

const Badge = style({
  display: "inline-block",
  width: "fit-content",
  borderRadius: vars.radii.rounded,
  backgroundColor: "green",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem",
});

export default Badge;
