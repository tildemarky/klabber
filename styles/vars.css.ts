import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    primary: "#D01114",
    lightPrimary: "#F47B7D",
    lightestPrimary: "#FDECEC",
    darkestPrimary: "#6F0C0C",
    gray: "#F3F4F6",

    blue1: "hsl(206, 100%, 99.2%)",
    blue2: "hsl(210, 100%, 98.0%)",
    blue3: "hsl(209, 100%, 96.5%)",
    blue4: "hsl(210, 98.8%, 94.0%)",
    blue5: "hsl(209, 95.0%, 90.1%)",
    blue6: "hsl(209, 81.2%, 84.5%)",
    blue7: "hsl(208, 77.5%, 76.9%)",
    blue8: "hsl(206, 81.9%, 65.3%)",
    blue9: "hsl(206, 100%, 50.0%)",
    blue10: "hsl(208, 100%, 47.3%)",
    blue11: "hsl(211, 100%, 43.2%)",
    blue12: "hsl(211, 100%, 15.0%)",

    green1: "hsl(136, 50.0%, 98.9%)",
    green2: "hsl(138, 62.5%, 96.9%)",
    green3: "hsl(139, 55.2%, 94.5%)",
    green4: "hsl(140, 48.7%, 91.0%)",
    green5: "hsl(141, 43.7%, 86.0%)",
    green6: "hsl(143, 40.3%, 79.0%)",
    green7: "hsl(146, 38.5%, 69.0%)",
    green8: "hsl(151, 40.2%, 54.1%)",
    green9: "hsl(151, 55.0%, 41.5%)",
    green10: "hsl(152, 57.5%, 37.6%)",
    green11: "hsl(153, 67.0%, 28.5%)",
    green12: "hsl(155, 40.0%, 14.0%)",

    red1: "hsl(359, 100%, 99.4%)",
    red2: "hsl(359, 100%, 98.6%)",
    red3: "hsl(360, 100%, 96.8%)",
    red4: "hsl(360, 97.9%, 94.8%)",
    red5: "hsl(360, 90.2%, 91.9%)",
    red6: "hsl(360, 81.7%, 87.8%)",
    red7: "hsl(359, 74.2%, 81.7%)",
    red8: "hsl(359, 69.5%, 74.3%)",
    red9: "hsl(358, 75.0%, 59.0%)",
    red10: "hsl(358, 69.4%, 55.2%)",
    red11: "hsl(358, 65.0%, 48.7%)",
    red12: "hsl(354, 50.0%, 14.6%)",

    amber1: "hsl(39, 70.0%, 99.0%)",
    amber2: "hsl(40, 100%, 96.5%)",
    amber3: "hsl(44, 100%, 91.7%)",
    amber4: "hsl(43, 100%, 86.8%)",
    amber5: "hsl(42, 100%, 81.8%)",
    amber6: "hsl(38, 99.7%, 76.3%)",
    amber7: "hsl(36, 86.1%, 67.1%)",
    amber8: "hsl(35, 85.2%, 55.1%)",
    amber9: "hsl(39, 100%, 57.0%)",
    amber10: "hsl(35, 100%, 55.5%)",
    amber11: "hsl(30, 100%, 34.0%)",
    amber12: "hsl(20, 80.0%, 17.0%)",

    slate3: "hsl(209, 13.3%, 95.3%)",
    slate4: "hsl(209, 12.2%, 93.2%)",

    slate10: "hsl(206, 5.8%, 52.3%)",
    slate11: "hsl(206, 6.0%, 43.5%)",
    slate12: "hsl(206, 24.0%, 9.0%)",
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
    scrollbarWidth: "calc(100vw - 100%)",
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
