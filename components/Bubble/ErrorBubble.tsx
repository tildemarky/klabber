import ErrorBub from "./ErrorBubble.css";

type ErrorProps = {
  children: React.ReactNode;
};

const ErrorBubble = ({ children }: ErrorProps) => {
  return <div className={ErrorBub}> {children}</div>;
};

export default ErrorBubble;
