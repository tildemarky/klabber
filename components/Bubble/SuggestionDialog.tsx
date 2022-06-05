import Stores from "@comp/Stores";
import { Modal, ModalImage, ModalTitle, Overlay } from "./SuggestionDialog.css";

const SuggestionDialog = ({ open, setOpen, name, metacritic, stores, background_image, ratings, esrb_rating }) => {
  return (
    <div className={Overlay}>
      <dialog open={open} className={Modal}>
        <img className={ModalImage} src={background_image} alt={`Cover image for ${name}`} />
        <h1 className={ModalTitle}>{name}</h1>
        <span>{metacritic}</span>
        {stores &&
          stores.length > 0 &&
          stores
            .filter(({ store }) => store.slug !== "xbox360")
            .map(({ store }) => <Stores key={store.slug} type={store.slug} name={name} />)}
        {!stores && <span>Store link missing</span>}
        <form method="dialog">
          <button type="button" onClick={() => setOpen(!open)}>
            Close
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default SuggestionDialog;
