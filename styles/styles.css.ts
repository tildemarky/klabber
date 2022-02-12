import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    primary: "#D01114",
    lightPrimary: "#F47B7D",
    lightestPrimary: "#FDECEC",
    darkestPrimary: "#6F0C0C",
    gray: "#F3F4F6",
  },
  radii: {
    rounded: "1rem",
    full: "9999px",
  },
  font: {
    main: "Inter, sans-serif",
    accent: "'Maven Pro', sans-serif",
  },
});

globalStyle("html, body, #__next", {
  height: "100%",
});
globalStyle("#__next", {
  display: "flex",
  flexDirection: "column",
  margin: "0 1rem",
  minWidth: "200px",
});
globalStyle("body", {
  fontFamily: vars.font.main,
  fontWeight: "normal",
});
