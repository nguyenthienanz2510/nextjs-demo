import tw from "twin.macro";

const ConversationScreen = ({ conversation, messages }) => {
  return (
    <ConversationScreenStyle>
      {messages.map((message, index) => {
        return <p key={index}>{JSON.stringify(message)}</p>;
      })}
    </ConversationScreenStyle>
  );
};
export default ConversationScreen;

const ConversationScreenStyle = tw.div`
    p-5
`;
