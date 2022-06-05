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
});

const Modal = style({
  zIndex: 4,
  width: "500px",
  position: "fixed",
  top: "25%",
  left: 0,
  border: "none",
  borderRadius: vars.radii.corners,
  boxShadow: vars.shadows.max,
});

const ModalImage = style({
  width: "100%",
  height: "25%",
  objectFit: "cover",
  borderRadius: "5px",
});

const ModalTitle = style({
  margin: 0,
});

export { Overlay, Modal, ModalImage, ModalTitle };
