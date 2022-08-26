import Header from "../Header";

const MessageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default MessageLayout;
