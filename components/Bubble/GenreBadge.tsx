import Genre from "./GenreBadge.css";

const GenreBadge = ({ genreName }) => {
  return <div className={Genre}>{genreName}</div>;
};

export default GenreBadge;
