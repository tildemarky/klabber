import { vars } from "@style/vars.css";
import { style } from "@vanilla-extract/css";

const Box = style({
  backgroundColor: vars.color.lightestPrimary,
  borderRadius: vars.radii.rounded,
  position: "relative",
  // padding: "0.75rem 1rem 0.75rem 1rem",
  margin: "0.25rem 0 1rem 0",
  alignSelf: "flex-start",
  display: "flex",
  flexWrap: "wrap",
  selectors: {
    "&::after": {
      content: "",
      position: "absolute",
      left: "0px",
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

export default Box;
