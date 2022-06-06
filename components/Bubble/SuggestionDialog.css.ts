import { vars } from "@style/vars.css";
import { style } from "@vanilla-extract/css";

const Overlay = style({
  position: "fixed",
  zIndex: 3,
  inset: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.5)",
  backdropFilter: "blur(4px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

const Modal = style({
  zIndex: 4,
  width: "75%",
  border: "none",
  borderRadius: vars.radii.corners,
  boxShadow: vars.shadows.max,
  marginLeft: "auto",
  marginRight: "auto",
  "@media": {
    "screen and (min-width: 600px)": {
      width: "500px",
    },
  },
});

const ModalImage = style({
  width: "100%",
  height: "25%",
  objectFit: "cover",
  borderRadius: "5px",
});

const ModalTitle = style({
  margin: 0,
  display: "inline-block",
  fontSize: "1rem",
});

const StoreContainer = style({});

const GenreContainer = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
});

const Header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export { Overlay, Modal, ModalImage, ModalTitle, StoreContainer, GenreContainer, Header };
