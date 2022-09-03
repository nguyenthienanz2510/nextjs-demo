import { useAuthState } from "react-firebase-hooks/auth";
import tw from "twin.macro";
import { auth } from "../../config/firebase";

const Message = ({ message }) => {
  const [user, _loading, _error] = useAuthState(auth);

  const MessageType =
    user?.email === message.user ? SenderMessageStyle : ReceiverMessageStyle;

  return (
    <MessageType>
      {message.text}
      <TimeStampStyle>{message.sent_at}</TimeStampStyle>
    </MessageType>
  );
};

export default Message;

const MessageStyle = tw.div`
    break-words max-w-[60%] min-w-[40%] px-5 pt-2 pb-6 rounded-lg mb-5 mx-2 relative
`;

const SenderMessageStyle = tw(MessageStyle)`
    bg-color-primary text-white ml-auto
`;

const ReceiverMessageStyle = tw(MessageStyle)`
    bg-color-gray-20
`;

const TimeStampStyle = tw.span`
    absolute bottom-0 right-0 text-xs px-2 py-1
`;
