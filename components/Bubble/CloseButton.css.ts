import { vars } from "@style/vars.css";
import { style } from "@vanilla-extract/css";

const Close = style({
  border: "none",
  backgroundColor: "white",
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  borderBottomLeftRadius: vars.radii.corners,
  borderBottomRightRadius: 0,
  display: "inline-flex",
  alignItems: "center",
  padding: "1rem",
  position: "absolute",
  top: "1rem",
  right: "1rem",
});

const CloseSvg = style({
  width: "20px",
  height: "20px",
  transition: vars.transition,
  ":hover": {
    transform: "scale(1.2)",
  },
  ":active": {
    transform: "scale(0.9)",
  },
});

export { Close, CloseSvg };
