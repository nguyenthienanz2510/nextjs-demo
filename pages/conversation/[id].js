import { doc, getDoc, getDocs } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import tw from "twin.macro";
import { ConversationScreen } from "../../components";
import RecipientAvatar from "../../components/ConversationBar/ConversationItem/RecipientAvatar";
import { StyleH4, StyleSpanSmall } from "../../components/GlobalStyle";
import MainLayout from "../../components/Layout/MainLayout";
import { auth, db } from "../../config/firebase";
import { useRecipient } from "../../hooks/useRecipient";
import {
  convertFirestoreTimestampToString,
  generateQueryGetMessages,
  transformMessages,
} from "../../utils/getMessagesInConversation";

const Conversation = ({ conversation, messages }) => {
  const [user, _loading, _error] = useAuthState(auth);

  const conversationUsers = conversation.users;

  const { recipient, recipientEmail } = useRecipient(conversationUsers);

  console.log(recipient, recipientEmail);

  return (
    <MainLayout>
      <ConversationContainer>
        <ConversationHeader>
          <RecipientAvatar
            recipient={recipient}
            recipientEmail={recipientEmail}
          />
          <HeaderInfo>
            <StyleH4>{recipientEmail}</StyleH4>
            {recipient && (
              <StyleSpanSmall>
                Last active:{" "}
                {convertFirestoreTimestampToString(recipient.lastSeen)}
              </StyleSpanSmall>
            )}
          </HeaderInfo>
        </ConversationHeader>
        <ConversationScreen messages={messages} conversation={conversation} />
      </ConversationContainer>
    </MainLayout>
  );
};

export default Conversation;

export const getServerSideProps = async (context) => {
  const conversationId = context.params?.id;

  const conversationRef = doc(db, "conversations", conversationId);

  const conversationSnapshot = await getDoc(conversationRef);

  const queryMessages = generateQueryGetMessages(conversationId);

  const messagesSnapshot = await getDocs(queryMessages);

  const messages = messagesSnapshot.docs.map((messageDoc) =>
    transformMessages(messageDoc)
  );

  return {
    props: {
      conversation: conversationSnapshot.data(),
      messages,
    },
  };
};

const ConversationContainer = tw.div`
    
`;

const ConversationHeader = tw.div`
    h-[74px] flex justify-start items-center border-b px-5
`;

const HeaderInfo = tw.div`
    flex justify-between flex-col px-4
`;
