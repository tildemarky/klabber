import { vars } from "@style/vars.css";
import { style } from "@vanilla-extract/css";

const User = style({
  vars: {
    [vars.color.primary]: vars.color.blue5,
  },
  width: "fit-content",
  marginLeft: "auto",
  border: `1px solid ${vars.color.primary}`,
  borderRadius: vars.radii.full,
  borderTopRightRadius: 0,
  padding: "1rem 1.5rem",
  boxShadow: vars.shadows.low,
  transition: vars.transition,
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: vars.shadows.medium,
  },
  backgroundColor: vars.color.primary,
  color: vars.color.blue12,
  fontWeight: "500",
});

export default User;
