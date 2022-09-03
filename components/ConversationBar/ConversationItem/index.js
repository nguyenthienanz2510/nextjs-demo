import { useRouter } from "next/router";
import tw from "twin.macro";
import { useRecipient } from "../../../hooks/useRecipient";
import RecipientAvatar from "./RecipientAvatar";

const ConversationItem = ({ id, conversationUsers }) => {
  // console.log(id, conversationUsers);

  const { recipient, recipientEmail } = useRecipient(conversationUsers);

  const router = useRouter();

  const handleSelectConversation = () => {
    router.push(`/conversation/${id}`);
  };

  return (
    <ConversationItemStyle onClick={handleSelectConversation}>
      <RecipientAvatar recipient={recipient} recipientEmail={recipientEmail} />
      <UserName>{recipientEmail}</UserName>
    </ConversationItemStyle>
  );
};

export default ConversationItem;

const ConversationItemStyle = tw.div`
    flex items-center cursor-pointer p-4 rounded-xl transition-all
    hover:text-color-white hover:bg-color-gray
    dark:hover:bg-color-white dark:hover:text-color-text
`;

const UserName = tw.div`
  ml-2.5
`;
