import { vars } from "@style/vars.css";
import { style } from "@vanilla-extract/css";

const SugBubble = style({
  position: "relative",
  borderRadius: vars.radii.corners,
  boxShadow: vars.shadows.lowMedium,
  minWidth: "200px",
  flex: 1,
  display: "inline-flex",
  alignItems: "flex-end",
  height: "300px",
});

const Image = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  zIndex: 1,
  borderRadius: vars.radii.corners,
  objectFit: "cover",
  objectPosition: "center",
});

const TextContainer = style({
  backdropFilter: "brightness(70%) blur(25px)",
  display: "inline-flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "100px",
  color: "white",
  zIndex: 2,
  paddingRight: "0.5rem",
  paddingLeft: "0.5rem",
  borderBottomLeftRadius: vars.radii.corners,
  borderBottomRightRadius: vars.radii.corners,
});

const Text = style({
  display: "flex",
  flexDirection: "column",
  padding: "0.5rem",
  userSelect: "none",
});

const Title = style({
  margin: 0,
  fontWeight: "bold",
});

const Rating = style({
  margin: 0,
});

const ModalButton = style({
  cursor: "pointer",
  backgroundColor: "transparent",
  border: "none",
  color: "white",
  transition: vars.transition,
  ":hover": {
    transform: "scale(1.1)",
  },
  ":active": {
    transform: "scale(0.9)",
  },
});

const ExpandButton = style({
  padding: "0.5rem",
  width: "25px",
  height: "25px",
});

export { SugBubble, Image, Title, Rating, Text, ExpandButton, TextContainer, ModalButton };
