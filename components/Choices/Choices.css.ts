import { vars } from "@style/vars.css";
import { style } from "@vanilla-extract/css";

const Choice = style({
  width: "fit-content",
  marginLeft: "auto",
  backgroundColor: vars.color.blue5,
  border: `2px solid ${vars.color.blue10}`,
  borderRadius: vars.radii.full,
  padding: "1rem 1.5rem",
  transition: vars.transition,
  boxShadow: vars.shadows.low,
  fontWeight: "600",
  color: vars.color.blue10,
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: vars.shadows.lowMedium,
  },
});

export default Choice;
