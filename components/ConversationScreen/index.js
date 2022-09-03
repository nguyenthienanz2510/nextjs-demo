import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import tw from "twin.macro";
import { auth } from "../../config/firebase";
import { useRecipient } from "../../hooks/useRecipient";
import {
  generateQueryGetMessages,
  transformMessages,
} from "../../utils/getMessagesInConversation";
import { DivHideScrollBar } from "../GlobalStyle";
import Message from "../Message";

const ConversationScreen = ({ conversation, messages, children }) => {
  const [user, _loading, _error] = useAuthState(auth);

  const conversationUsers = conversation.users;

  const { recipientEmail, recipient } = useRecipient(conversationUsers);

  const router = useRouter();

  const conversationId = router.query.id;

  const queryGetMessages = generateQueryGetMessages(conversationId);

  const [messagesSnapshot, messagesLoading, __error] =
    useCollection(queryGetMessages);

  const showMessages = () => {
    if (messagesLoading) {
      return messages.map((message, index) => {
        return <Message key={index} message={message} />;
      });
    }

    if (messagesSnapshot) {
      return messagesSnapshot.docs.map((message, index) => {
        return <Message key={index} message={transformMessages(message)} />;
      });
    }

    return null;
  };

  return (
    <ConversationScreenStyle>
      {showMessages()}
      {children}
    </ConversationScreenStyle>
  );
};
export default ConversationScreen;

const ConversationScreenStyle = tw(DivHideScrollBar)`
  h-[calc(100% - 164px)] overflow-scroll
`;
