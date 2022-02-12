import { style } from "@vanilla-extract/css";

import { vars } from "../styles.css";

export const StyledHeader = style({
  flex: "0",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  "@media": {
    "(min-width: 650px)": {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
});
export const TitleLink = style({
  textDecoration: "none",
  selectors: {
    "&:link": {},
    "&:visited": {
      color: vars.color.primary,
    },
    "&:hover": {
      color: vars.color.lightPrimary,
    },
    "&:active": {},
  },
});
export const Title = style({
  fontSize: "2rem",
});
export const Nav = style({
  fontSize: "1.1rem",
});
