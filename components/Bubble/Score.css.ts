import { vars } from "@style/vars.css";
import { style } from "@vanilla-extract/css";

const Badge = style({
  display: "inline-flex",
  alignItems: "center",
  width: "fit-content",
  borderRadius: vars.radii.rounded,
  backgroundColor: vars.color.amber3,
  color: vars.color.amber9,
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
  fontWeight: "bold",
  fontSize: "1rem",
});

const BadgeSvg = style({
  paddingLeft: "0.5rem",
  height: "1rem",
  width: "1rem",
});

export { Badge, BadgeSvg };
