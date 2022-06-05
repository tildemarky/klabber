import { vars } from "@style/vars.css";
import { style } from "@vanilla-extract/css";

const SuggestionContainer = style({
  borderRadius: vars.radii.corners,
  backgroundColor: vars.color.lightPrimary,
  padding: "8px",
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
});

export default SuggestionContainer;
