import { SuggestionContainer } from "./Bubble.css";
import ChatBubble from "./ChatBubble";
import ErrorBubble from "./ErrorBubble";
import SuggestionBubble from "./SuggestionBubble";
import UserBubble from "./UserBubble";

type BubbleProps = {
  type: string;
  games?: any[] | null;
  message: string;
};

const Bubble = ({ type, games, message }: BubbleProps): JSX.Element => {
  if (games) {
    return (
      <>
        <ChatBubble>Here are some results that fit that search...</ChatBubble>
        <div className={SuggestionContainer}>
          {games.map((game) => (
            <SuggestionBubble key={game.id} {...game} />
          ))}
        </div>
      </>
    );
  } else if (type === "error") {
    return <ErrorBubble>{message}</ErrorBubble>;
  } else if (type === "user") {
    return <UserBubble>{message}</UserBubble>;
  } else {
    return <ChatBubble>{message}</ChatBubble>;
  }
};

export default Bubble;
