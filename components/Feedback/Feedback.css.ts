import { style } from "@vanilla-extract/css";

const FeedbackGroup = style({
  display: "inline-flex",
  alignSelf: "flex-start",
});
const FeedbackText = style({
  margin: "0.5rem 1rem",
});

export { FeedbackGroup, FeedbackText };
