import Stores from "@comp/Stores";
import { Dispatch, SetStateAction } from "react";
import Rating from "./Rating";
import type { SuggestionProps } from "./SuggestionBubble";
import { Modal, ModalImage, ModalTitle, Overlay } from "./SuggestionDialog.css";

interface DialogProps extends SuggestionProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const SuggestionDialog = ({
  open,
  setOpen,
  name,
  metacritic,
  stores,
  background_image,
  ratings,
  esrb_rating,
}: DialogProps) => {
  console.log(ratings);
  console.log(esrb_rating);
  return (
    <div className={Overlay}>
      <dialog open={open} className={Modal}>
        <img className={ModalImage} src={background_image} alt={`Cover image for ${name}`} />
        <h1 className={ModalTitle}>{name}</h1>
        {metacritic && <div>{metacritic}</div>}
        {esrb_rating && <Rating rate={esrb_rating.name} />}
        {ratings &&
          ratings.map((rating) => (
            <div key={rating.id}>
              {rating.title} - {rating.count} - {rating.percent}%
            </div>
          ))}
        {stores &&
          stores.length > 0 &&
          stores
            .filter(({ store }) => store.slug !== "xbox360")
            .map(({ store }) => <Stores key={store.slug} type={store.slug} name={name} />)}
        {!stores && <div>Store link missing</div>}
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
