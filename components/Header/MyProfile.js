import { Avatar } from "@material-ui/core";
import tw from "twin.macro";
import { FlexCenterStyle } from "../GlobalStyle";

const MyProfile = () => {
  return (
    <FlexCenterStyle>
      <UserAvatar src="https://cdn-icons-png.flaticon.com/512/3909/3909219.png"/>
      <UserName>User Name</UserName>
      {/* <UserAvatar src={user?.photoURL || ""} />
      <UserName>{user?.name || "Username"}</UserName> */}
    </FlexCenterStyle>
  );
};

export default MyProfile;

const UserAvatar = tw(Avatar)`
  m-2.5
`;

const UserName = tw.div`
  
`;
