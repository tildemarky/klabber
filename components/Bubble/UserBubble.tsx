import User from "./UserBubble.css";

type UserProps = {
  children: React.ReactNode;
};

const UserBubble = ({ children }: UserProps) => {
  return <div className={User}>{children}</div>;
};

export default UserBubble;
