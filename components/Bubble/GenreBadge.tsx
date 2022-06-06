import Genre from "./GenreBadge.css";

interface GenreProps {
  genreName: string;
}

const GenreBadge = ({ genreName }: GenreProps) => {
  return <div className={Genre}>{genreName}</div>;
};

export default GenreBadge;
