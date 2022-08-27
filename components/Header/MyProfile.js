import { Avatar } from "@material-ui/core";
import tw from "twin.macro";
import { FlexCenterStyle } from "../GlobalStyle";

const MyProfile = () => {
  return (
    <FlexCenterStyle>
      <UserAvatar />
      <UserName>NguyenThienAnZ</UserName>
    </FlexCenterStyle>
  );
};

export default MyProfile;

const UserAvatar = tw(Avatar)`
  m-2.5
`;

const UserName = tw.div`
  
`;
