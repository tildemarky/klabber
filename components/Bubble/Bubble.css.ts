import { vars } from "@style/vars.css";
import { style } from "@vanilla-extract/css";

const SuggestionContainer = style({
  borderRadius: vars.radii.corners,
  borderTopLeftRadius: 0,
  backgroundColor: vars.color.slate3,
  padding: "8px",
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
});

export { SuggestionContainer };
