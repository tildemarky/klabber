import { style } from "@vanilla-extract/css";

export const StyledContainer = style({
  flex: "1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: "0 auto",
  width: "100%",
  "@media": {
    "(min-width: 760px)": {
      width: "75vw",
    },
    "(min-width: 1020px)": {
      width: "70vw",
    },
  },
});
