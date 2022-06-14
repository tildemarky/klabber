import { style } from "@vanilla-extract/css";

const StyledContainer = style({
  flex: "1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  margin: "0 auto",
  width: "100%",
  "@media": {
    "screen and (min-width: 700px)": {
      width: "60vw",
    },
  },
});

export default StyledContainer;
