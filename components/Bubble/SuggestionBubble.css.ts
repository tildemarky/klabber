import { vars } from "@style/vars.css";
import { style } from "@vanilla-extract/css";

const SugBubble = style({
  position: "relative",
  borderRadius: vars.radii.full,
  borderTopLeftRadius: 0,
  boxShadow: vars.shadows.lowMedium,
  minWidth: "200px",
  flex: 1,
  display: "inline-flex",
  alignItems: "flex-end",
  "@media": {
    "screen and (min-width: 500px)": {
      height: "300px",
    },
  },
});

const Image = style({
  width: "30%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  borderTopLeftRadius: vars.radii.corners,
  borderBottomLeftRadius: vars.radii.corners,
  "@media": {
    "screen and (min-width: 500px)": {
      position: "absolute",
      width: "100%",
      zIndex: 1,
      borderRadius: vars.radii.corners,
    },
  },
});

const TextContainer = style({
  backgroundColor: "white",
  display: "inline-flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  minHeight: "100px",
  color: "black",
  zIndex: 2,
  paddingRight: "0.5rem",
  paddingLeft: "0.5rem",
  borderTopRightRadius: vars.radii.corners,
  borderBottomRightRadius: vars.radii.corners,
  "@media": {
    "screen and (min-width: 500px)": {
      color: "white",
      backgroundColor: "unset",
      backdropFilter: "brightness(70%) blur(25px)",
      borderTopRightRadius: "unset",
      borderBottomLeftRadius: vars.radii.corners,
      borderBottomRightRadius: vars.radii.corners,
    },
  },
});

const Text = style({
  display: "flex",
  flexDirection: "column",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  userSelect: "none",
  "@media": {
    "screen and (min-width: 500px)": {
      padding: "0.5rem",
    },
  },
});

const Title = style({
  margin: 0,
  fontWeight: "bold",
});

const Rating = style({
  margin: 0,
  display: "none",
  "@media": {
    "screen and (min-width: 500px)": {
      display: "block",
    },
  },
});

const ModalButton = style({
  cursor: "pointer",
  backgroundColor: "transparent",
  border: "none",
  color: "black",
  transition: vars.transition,
  ":hover": {
    transform: "scale(1.1)",
  },
  ":active": {
    transform: "scale(0.9)",
  },
  "@media": {
    "screen and (min-width: 500px)": {
      color: "white",
    },
  },
});

const ExpandButton = style({
  padding: "0.25rem",
  width: "25px",
  height: "25px",
  "@media": {
    "screen and (min-width: 500px)": {
      padding: "0.5rem",
    },
  },
});

export { SugBubble, Image, Title, Rating, Text, ExpandButton, TextContainer, ModalButton };
