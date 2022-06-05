import SuggestionContainer from "./Bubble.css";
import ChatBubble from "./ChatBubble";
import SuggestionBubble from "./SuggestionBubble";

type BubbleProps = {
  type: "bot" | "error" | "suggestion" | "user" | string;
  games?: any[] | null;
  message: string;
};

const Bubble = ({ type, games, message }: BubbleProps): JSX.Element => {
  if (games) {
    return (
      <div className={SuggestionContainer}>
        {games.map((game) => (
          <SuggestionBubble key={game.id} {...game} />
        ))}
      </div>
    );
  } else if (type === "error") {
    return <ChatBubble>{message}</ChatBubble>;
  } else {
    return <ChatBubble>{message}</ChatBubble>;
  }
};

export default Bubble;
