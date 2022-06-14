import { vars } from "@style/vars.css";
import { style } from "@vanilla-extract/css";

const Overlay = style({
  position: "fixed",
  zIndex: 3,
  inset: 0,
  width: `calc(100vw - ${vars.spacing.scrollbarWidth})`,
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.5)",
  backdropFilter: "blur(4px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Modal = style({
  zIndex: 4,
  width: "75%",
  border: "none",
  borderRadius: vars.radii.corners,
  boxShadow: vars.shadows.max,
  marginLeft: "auto",
  marginRight: "auto",
  position: "relative",
  "@media": {
    "screen and (min-width: 600px)": {
      width: "500px",
    },
  },
});

const ModalImage = style({
  width: "100%",
  height: "175px",
  objectFit: "cover",
  borderRadius: "5px",
});

const ModalTitle = style({
  margin: 0,
  display: "inline-block",
  fontSize: "1.1rem",
});

const StoreContainer = style({
  display: "flex",
  paddingTop: "1rem",
  gap: "1rem",
});

const GenreContainer = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.25rem",
  paddingBottom: "1rem",
});

const Header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "0.5rem",
  paddingBottom: "1rem",
});

const RecommendationContainer = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBottom: "0.5rem",
});

const ReleaseDate = style({
  paddingBottom: "1rem",
});

const FormSpace = style({
  display: "flex",
  justifyContent: "flex-end",
});

export {
  Overlay,
  Modal,
  ModalImage,
  ModalTitle,
  StoreContainer,
  GenreContainer,
  Header,
  RecommendationContainer,
  ReleaseDate,
  FormSpace,
};
