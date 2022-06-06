import Stores from "@comp/Stores";
import { Dispatch, SetStateAction } from "react";
import GenreBadge from "./GenreBadge";
import Rating from "./Rating";
import Score from "./Score";
import type { SuggestionProps } from "./SuggestionBubble";
import { GenreContainer, Header, Modal, ModalImage, ModalTitle, Overlay, StoreContainer } from "./SuggestionDialog.css";

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
  released,
  genres,
}: DialogProps) => {
  console.log(ratings);
  console.log(esrb_rating);
  return (
    <div className={Overlay}>
      <dialog open={open} className={Modal}>
        <img className={ModalImage} src={background_image} alt={`Cover image for ${name}`} />
        <div className={Header}>
          <h1 className={ModalTitle}>{name}</h1>
          {metacritic && <Score metacritic={metacritic} />}
        </div>

        <div className={GenreContainer}>
          {genres && genres.map((genre) => <GenreBadge key={genre.id + genre.name} genreName={genre.name} />)}{" "}
        </div>

        <span>Released: {released}</span>

        {ratings &&
          ratings.map((rating) => (
            <div key={rating.id}>
              {rating.title} - {rating.count} - {rating.percent}%
            </div>
          ))}

        <div className={StoreContainer}>
          {stores &&
            stores.length > 0 &&
            stores
              .filter(({ store }) => store.slug !== "xbox360")
              .map(({ store }) => <Stores key={store.slug} type={store.slug} name={name} />)}
          {!stores && <div>Store link missing</div>}
        </div>

        {esrb_rating && <Rating rate={esrb_rating.name} />}
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
