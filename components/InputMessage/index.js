import tw from "twin.macro";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { async } from "@firebase/util";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

const InputMessage = ({ scrollToBottom }) => {
  const router = useRouter();

  console.log(serverTimestamp());

  const conversationId = router.query.id;

  const [newMessage, setNewMessage] = useState("");

  const [user, _loading, _error] = useAuthState(auth);

  const addMessageToDbAndUpdateLastSeen = async () => {
    await setDoc(
      doc(db, "users", user?.email),
      {
        lastSeen: serverTimestamp(),
      },
      {
        merge: true,
      }
    );
    await addDoc(collection(db, "messages"), {
      conversation_id: conversationId,
      sent_at: serverTimestamp(),
      text: newMessage,
      user: user?.email,
    });
    setNewMessage("");
    console.log(scrollToBottom);
    scrollToBottom();
  };

  const handleSendMessageOnEnter = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (!newMessage) return;
      addMessageToDbAndUpdateLastSeen();
    }
  };

  const handleSendMessageOnClick = (event) => {
    event.preventDefault();
    if (!newMessage) return;
    addMessageToDbAndUpdateLastSeen();
  };

  return (
    <InputMessageContainerStyle>
      <InputMessageStyle
        value={newMessage}
        onChange={(event) => {
          setNewMessage(event.target.value);
        }}
        onKeyDown={handleSendMessageOnEnter}
      />
      <SendMessageButton
        disabled={!newMessage}
        onClick={handleSendMessageOnClick}
      >
        <SendIcon />
      </SendMessageButton>
    </InputMessageContainerStyle>
  );
};

export default InputMessage;

const InputMessageContainerStyle = tw.div`
    border-t p-5 flex items-center z-50 absolute bottom-0 left-0 right-0 bg-white
    dark:bg-color-dark-primary
`;

const InputMessageStyle = tw.input`
    h-12 px-5 w-full border rounded-l 
    dark:bg-color-dark-primary
`;

const SendMessageButton = tw.button`
    h-12 leading-[48px] px-5 bg-color-gray-20 hover:bg-color-gray-80 hover:text-color-white rounded-r
    dark:bg-color-gray-80 dark:hover:text-color-black dark:hover:bg-color-white
`;
