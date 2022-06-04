import { style } from "@vanilla-extract/css";

const MotionLink = style({});
const StyledSvg = style({
  width: "24px",
  height: "24px",
  filter: "opacity(0.3)",
  padding: "0 0.25rem",
  selectors: {
    "&:hover": {
      filter: "opacity(0.7)",
    },
    "&.playstation": {
      width: "30px",
    },
    "&.nintendo": {
      width: "30px",
    },
  },
});

export { MotionLink, StyledSvg };
