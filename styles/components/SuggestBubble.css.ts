import { style } from "@vanilla-extract/css";
import { vars } from "styles/styles.css";

export const SuggestBub = style({
  height: "150px",
  minWidth: "200px",
  position: "relative",
  flex: "1",
  margin: "0.5rem 0.75rem",
  selectors: {
    "&:last-of-type": {
      marginBottom: "1rem",
    },
  },
  "@media": {
    "(min-width: 650px)": {
      margin: "1rem",
      selectors: {
        "&:last-of-type": {
          marginBottom: "initial",
        },
      },
    },
  },
});
export const StyledImage = style({
  borderRadius: vars.radii.rounded,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "top",
  position: "absolute",
  filter: "",
});
export const Information = style({
  position: "relative",
  width: "100%",
  height: "75%",
  borderRadius: vars.radii.rounded,
  // prevents odd highlighting when double clicking elements
  userSelect: "none",
});
export const Links = style({
  position: "absolute",
  width: "100%",
  top: "75%",
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: "1rem",
});
export const Title = style({
  margin: "0",
  position: "relative",
  display: "inline-flex",
  alignItems: "flex-end",
  height: "100%",
  width: "100%",
  backgroundImage: "linear-gradient(0deg, #00000099 10%, #ffffff22 100%)",
  borderRadius: vars.radii.rounded,
});
export const MainTitle = style({
  margin: "1rem",
  color: "white",
  fontSize: "1rem",
  userSelect: "none",
});
