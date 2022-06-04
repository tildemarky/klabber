import { vars } from "@style/vars.css";
import { style } from "@vanilla-extract/css";

const SuggestBub = style({
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
const StyledImage = style({
  borderRadius: vars.radii.rounded,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "top",
  position: "absolute",
  filter: "",
});
const Information = style({
  position: "relative",
  width: "100%",
  height: "75%",
  borderRadius: vars.radii.rounded,
  // prevents odd highlighting when double clicking elements
  userSelect: "none",
});
const Links = style({
  position: "absolute",
  width: "100%",
  top: "75%",
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: "1rem",
});
const Title = style({
  margin: "0",
  position: "relative",
  display: "inline-flex",
  alignItems: "flex-end",
  height: "100%",
  width: "100%",
  backgroundImage: "linear-gradient(0deg, #00000099 10%, #ffffff22 100%)",
  borderRadius: vars.radii.rounded,
});
const MainTitle = style({
  margin: "1rem",
  color: "white",
  fontSize: "1rem",
  userSelect: "none",
});

export { SuggestBub, MainTitle, Title, Links, StyledImage, Information };
