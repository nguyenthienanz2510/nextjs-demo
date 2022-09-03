import tw from "twin.macro";
import SideBarItem from "./SideBarItem/SideBarItem";
import MessageIcon from "@mui/icons-material/Message";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import Logout from "./SideBarItem/Logout";
const SideBar = () => {
  const data = [
    {
      icon: <MessageIcon />,
      title: "Message",
    },
    {
      icon: <AccountBoxIcon />,
      title: "Profile",
    },
    {
      icon: <SettingsIcon />,
      title: "Settings",
    },
  ];
  return (
    <SideBarStyle>
      {data.map((item, index) => (
        <SideBarItem key={index} icon={item.icon} title={item.title} />
      ))}
      <Logout />
    </SideBarStyle>
  );
};

export default SideBar;

const SideBarStyle = tw.div`
  w-[240px] inline-block px-5 dark:bg-color-dark-primary dark:text-white
`;
