import tw from "twin.macro";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@material-ui/core";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { addDoc, collection, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import ConversationItem from "./ConversationItem";
import { DivHideScrollBar } from "../GlobalStyle";

const ConversationBar = () => {
  const [user, _loading, _error] = useAuthState(auth);

  const [open, setOpen] = useState(false);

  const [recipientEmail, setRecipientEmail] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setRecipientEmail("");
  };

  const queryGetConversationsForCurrentUser = query(
    collection(db, "conversations"),
    where("users", "array-contains", user.email)
  );

  const [conversationsSnapshot, __loading, __error] = useCollection(
    queryGetConversationsForCurrentUser
  );

  const isConversationAlreadyExists = (recipientEmail) => {
    return conversationsSnapshot?.docs.find((conversation) =>
      conversation.data().users.includes(recipientEmail)
    );
  };

  const handleCreateConversation = async () => {
    console.log("CREATE", recipientEmail);
    if (!recipientEmail) return;

    const isInvitingSelf = recipientEmail === user.email;

    const regex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (
      regex.test(recipientEmail) &&
      !isInvitingSelf &&
      !isConversationAlreadyExists(recipientEmail)
    ) {
      await addDoc(collection(db, "conversations"), {
        users: [user?.email, recipientEmail],
      });
    }

    handleClose();
  };

  return (
    <ConversationStyle>
      <Search>
        <IconButtonStyle>
          <IconButton>
            <SearchIconStyle />
          </IconButton>
        </IconButtonStyle>
        <SearchInput placeholder="Search..." />
      </Search>
      <ButtonStartNewChat onClick={handleClickOpen}>
        Start a new chat
      </ButtonStartNewChat>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New conversation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your email address you wish to chat with
          </DialogContentText>
          <TextField
            autoFocus
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={recipientEmail}
            onChange={(event) => {
              setRecipientEmail(event.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={!recipientEmail} onClick={handleCreateConversation}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
      <ConversationList>
        {conversationsSnapshot?.docs.map((conversation) => {
          return (
            <ConversationItem
              key={conversation.id}
              id={conversation.id}
              conversationUsers={conversation.data().users}
            />
          );
        })}
      </ConversationList>
    </ConversationStyle>
  );
};

export default ConversationBar;

const ConversationStyle = tw.div`
  w-[364px] p-5 rounded-t-2xl bg-color-white dark:bg-color-dark-primary
`;

const Search = tw.div`
    flex relative items-center
`;

const SearchInput = tw.input`
    h-[42px] w-full pl-12 border border-color-gray-40 rounded-[10px] dark:bg-color-dark-primary
`;

const IconButtonStyle = tw.div`
    absolute
`;

const SearchIconStyle = tw(SearchIcon)`dark:text-color-white`;

const ButtonStartNewChat = tw.button`
    mt-2.5 bg-color-gray-20 rounded-[10px] w-full h-[42px] flex justify-center items-center 
    hover:text-color-white hover:bg-color-gray
    dark:hover:bg-color-white dark:hover:text-color-text
    transition-all
`;

const ConversationList = tw(DivHideScrollBar)`my-5 h-[500px] overflow-y-scroll`;
