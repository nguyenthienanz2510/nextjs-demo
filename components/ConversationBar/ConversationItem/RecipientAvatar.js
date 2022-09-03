import tw from "twin.macro";
import { Avatar } from "@material-ui/core";

const RecipientAvatar = ({ recipient, recipientEmail }) => {
  return recipient?.photoURL ? (
    <AvatarStyle src={recipient.photoURL} />
  ) : (
    <AvatarStyle>
      {recipientEmail && recipientEmail[0].toUpperCase()}
    </AvatarStyle>
  );
};

export default RecipientAvatar;

const AvatarStyle = tw(Avatar)`
    
`;
