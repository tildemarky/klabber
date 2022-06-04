import { vars } from "@style/vars.css";
import { style } from "@vanilla-extract/css";

const StyledHeader = style({
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
const TitleLink = style({
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
const Title = style({
  fontSize: "2rem",
});
const Nav = style({
  fontSize: "1.1rem",
});

export { StyledHeader, TitleLink, Title, Nav };
