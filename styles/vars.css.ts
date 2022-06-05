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
    corners: "8px",
    full: "9999px",
  },
  font: {
    main: `-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif`,
  },
  spacing: {
    bubble: "1rem 0.75rem",
  },
  shadows: {
    low: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    lowMedium: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    medium: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    max: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
  },
  transition: "all ease-in-out 0.1s",
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
  boxSizing: "border-box",
});
