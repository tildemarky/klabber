import { vars } from "@style/vars.css";
import { style, styleVariants } from "@vanilla-extract/css";

const base = style({
  padding: "0.5rem",
  borderRadius: vars.radii.corners,
  display: "inline-flex",
  flex: 1,
  justifyContent: "center",
});

const Review = styleVariants({
  positive: [base, { color: vars.color.green10, backgroundColor: vars.color.green3 }],
  negative: [base, { color: vars.color.red10, backgroundColor: vars.color.red3, marginLeft: "0.25rem" }],
});

const ReviewSvg = styleVariants({
  positive: { paddingRight: "0.5rem" },
  negative: { paddingLeft: "0.5rem" },
});

export { Review, ReviewSvg };
