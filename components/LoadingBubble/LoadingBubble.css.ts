import { vars } from "@style/vars.css";
import { style } from "@vanilla-extract/css";

const StyledLoadingBubble = style({
  width: "fit-content",
  marginRight: "auto",
  backgroundColor: vars.color.slate3,
  borderRadius: vars.radii.full,
  borderTopLeftRadius: 0,
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  paddingRight: 0,
  paddingLeft: "1.5rem",
});

const Loader = style({
  width: "50px",
  color: vars.color.slate11,
});

export { StyledLoadingBubble, Loader };
