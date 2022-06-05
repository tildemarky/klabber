import { vars } from "@style/vars.css";
import { style } from "@vanilla-extract/css";

const BubbleStyle = style({
  border: `1px solid ${vars.color.gray}`,
  borderRadius: vars.radii.corners,
  padding: vars.spacing.bubble,
  boxShadow: vars.shadows.low,
  transition: vars.transition,
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: vars.shadows.medium,
  },
});

export default BubbleStyle;
