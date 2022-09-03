import tw from "twin.macro";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "firebase/auth";
import { auth } from "../../../config/firebase";

const Logout = () => {
  const data = {
    icon: <LogoutIcon />,
    title: "Logout",
  };

  const handleLogout = async () => {
    console.log("logout");
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SideBarItemStyle onClick={handleLogout}>
      <SideBarItemIcon>{data.icon}</SideBarItemIcon>
      <SideBarItemTitle>{data.title}</SideBarItemTitle>
    </SideBarItemStyle>
  );
};

export default Logout;

const SideBarItemStyle = tw.div`
     w-full h-[46px] mt-2.5 rounded-[10px] hover:text-color-white hover:bg-color-gray
     flex items-center cursor-pointer transition-all
     dark:hover:bg-color-white dark:hover:text-color-text
`;

const SideBarItemIcon = tw.div`mx-5`;

const SideBarItemTitle = tw.div``;
