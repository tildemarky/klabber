import Stores from "@comp/Stores";
import { Dispatch, SetStateAction } from "react";
import CloseButton from "./CloseButton";
import GenreBadge from "./GenreBadge";
import Rating from "./Rating";
import Recommendations from "./Recommendations";
import Score from "./Score";
import type { SuggestionProps } from "./SuggestionBubble";
import {
  FormSpace,
  GenreContainer,
  Header,
  Modal,
  ModalImage,
  ModalTitle,
  Overlay,
  RecommendationContainer,
  ReleaseDate,
  StoreContainer,
} from "./SuggestionDialog.css";

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
  const preRatings = ratings.filter((rating) => rating.title !== "meh");
  const [skip] = preRatings.filter((rating) => rating.title === "skip");
  const [recommended] = preRatings.filter((rating) => rating.title === "recommended");
  const [exceptional] = preRatings.filter((rating) => rating.title === "exceptional");
  const combinedCount = (recommended ? recommended.count : 0) + (exceptional ? exceptional.count : 0);
  const formattedRatings = [{ id: 2, title: "recommended", count: combinedCount }, skip];

  // Creating readable date
  const preFormattedDate = released.split("-");
  const convertedToNumbers = preFormattedDate.map((num) => parseInt(num));
  const [year, month, day] = convertedToNumbers;
  const formattedDate = new Date(year, month - 1, day).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={Overlay}>
      <dialog open={open} className={Modal}>
        <form method="dialog" className={FormSpace}>
          <CloseButton setOpen={setOpen} />
        </form>
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img className={ModalImage} src={background_image || `./abstract.jpg`} alt={`Cover image for ${name}`} />

        <div className={Header}>
          <h1 className={ModalTitle}>{name}</h1>
          {metacritic && <Score metacritic={metacritic} />}
        </div>

        {esrb_rating && <Rating rate={esrb_rating.name} />}

        <div className={GenreContainer}>
          {genres && genres.map((genre) => <GenreBadge key={genre.id + genre.name} genreName={genre.name} />)}{" "}
        </div>

        {released && <div className={ReleaseDate}>{formattedDate}</div>}

        {formattedRatings[0] && formattedRatings[0].count > 0 && formattedRatings[1] && formattedRatings[1].count > 0 && (
          <div className={RecommendationContainer}>
            {formattedRatings.map((rating) => (
              <Recommendations key={rating.count} value={rating.count} positive={rating.title === "recommended"} />
            ))}
          </div>
        )}

        {stores && (
          <div className={StoreContainer}>
            {stores &&
              stores.length > 0 &&
              stores
                .filter(({ store }) => store.slug !== "xbox360")
                .map(({ store }) => <Stores key={store.slug} type={store.slug} name={name} />)}
          </div>
        )}
      </dialog>
    </div>
  );
};

export default SuggestionDialog;
