import { vars } from "@style/vars.css";
import { style } from "@vanilla-extract/css";

const Genre = style({
  borderRadius: vars.radii.rounded,
  backgroundColor: vars.color.slate3,
  fontWeight: "500",
  fontSize: "0.9rem",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
});

export default Genre;
