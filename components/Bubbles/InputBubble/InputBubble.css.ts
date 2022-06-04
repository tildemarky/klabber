import { vars } from "@style/vars.css";
import { keyframes, style } from "@vanilla-extract/css";

const ping = keyframes({
  "75%, 100%": {
    transform: "scale(2)",
    opacity: "0",
  },
});

const Box = style({
  position: "relative",
  marginLeft: "auto",
  marginTop: "2rem",
});
const SpanContainer = style({
  position: "absolute",
  display: "flex",
  height: "0.75rem",
  width: "0.75rem",
  top: "0",
  left: "0",
  marginLeft: "-0.05rem",
  marginTop: "-0.05rem",
});
const RegularSpan = style({
  position: "relative",
  display: "inline-flex",
  borderRadius: "9999px",
  width: "0.75rem",
  height: "0.75rem",
  backgroundColor: vars.color.primary,
});
const Span = style({
  position: "absolute",
  display: "inline-flex",
  borderRadius: "9999px",
  width: "100%",
  height: "100%",
  opacity: "0.75",
  backgroundColor: vars.color.primary,
  animation: `${ping} 1s cubic-bezier(0, 0, 0.2, 1) infinite;`,
});
const InputSection = style({
  display: "flex",
});
const Input = style({
  backgroundColor: vars.color.gray,
  width: "100%",
  border: "none",
  borderRadius: vars.radii.full,
  height: "50px",
  padding: "0.75rem 50px 0.75rem 1.5rem",
  boxSizing: "border-box",
  selectors: {
    "&:focus": {
      outline: "none",
      boxShadow: `inset 0 0 0 4px ${vars.color.lightPrimary}`,
    },
  },
});
const Submit = style({
  position: "absolute",
  right: "0",
  padding: "0",
  marginTop: "5px",
  marginRight: "5px",
  backgroundColor: "transparent",
  borderRadius: vars.radii.full,
  border: `2px solid ${vars.color.primary}`,
  color: "white",
  width: "40px",
  height: "40px",
  selectors: {
    "&:hover": {
      backgroundColor: vars.color.primary,
    },
    "&:disabled": {
      filter: "opacity(0.5)",
      pointerEvents: "none",
      cursor: "not-allowed",
    },
  },
});
const SubmitSvg = style({
  marginTop: "5px",
  stroke: vars.color.primary,
  selectors: {
    "&:hover": {
      stroke: vars.color.gray,
    },
  },
});

export { Box, SpanContainer, RegularSpan, Span, InputSection, Input, Submit, SubmitSvg };
