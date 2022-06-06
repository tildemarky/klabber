import BubbleStyle from "./ChatBubble.css";

type ChatProps = {
  children: React.ReactNode;
};

const ChatBubble = ({ children }: ChatProps) => {
  return <div className={BubbleStyle}>{children}</div>;
};

export default ChatBubble;
