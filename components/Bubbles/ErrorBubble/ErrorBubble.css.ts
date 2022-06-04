import { vars } from "@style/vars.css";
import { style } from "@vanilla-extract/css";

const StyledError = style({
  backgroundColor: vars.color.lightestPrimary,
  borderRadius: vars.radii.full,
  padding: "0.75rem 1rem 0.75rem 1rem",
  position: "relative",
  margin: "0.25rem 0 1rem 0",
  alignSelf: "flex-start",
  maxWidth: "100%",
  wordBreak: "break-word",
  letterSpacing: "-0.004em",
  "@supports": {
    "(max-width: -webkit-fill-available)": {
      maxWidth: "-webkit-fill-available",
    },
  },
  selectors: {
    "&::after": {
      content: "",
      position: "absolute",
      zIndex: -1,
      left: "2px",
      top: "auto",
      right: "auto",
      bottom: "-10px",
      width: "0",
      height: "0",
      border: "1rem solid",
      transform: "rotate(35deg)",
      borderColor: `transparent transparent transparent ${vars.color.lightestPrimary}`,
    },
  },
});
const StyledCode = style({
  fontWeight: "bold",
  color: vars.color.primary,
});

export { StyledCode, StyledError };
