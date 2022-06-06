import { style } from "@vanilla-extract/css";

const FeedbackGroup = style({
  display: "inline-flex",
  alignSelf: "flex-start",
  width: "100%",
});
const FeedbackText = style({
  margin: "0.5rem 1rem",
});

export { FeedbackGroup, FeedbackText };
