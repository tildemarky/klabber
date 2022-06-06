import { vars } from "@style/vars.css";
import { style } from "@vanilla-extract/css";

const ErrorBub = style({
  vars: {
    [vars.color.primary]: vars.color.red4,
  },
  width: "fit-content",
  marginRight: "auto",
  border: `1px solid ${vars.color.primary}`,
  borderRadius: vars.radii.full,
  borderTopLeftRadius: 0,
  padding: "1rem 1.5rem",
  boxShadow: vars.shadows.low,
  transition: vars.transition,
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: vars.shadows.medium,
  },
  backgroundColor: vars.color.primary,
  color: vars.color.red10,
});

export default ErrorBub;
