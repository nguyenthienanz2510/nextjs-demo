import tw from "twin.macro";

const SideBarItem = ({ icon, title }) => {
  return (
    <SideBarItemStyle>
      <SideBarItemIcon>{icon}</SideBarItemIcon>
      <SideBarItemTitle>{title}</SideBarItemTitle>
    </SideBarItemStyle>
  );
};

export default SideBarItem;

const SideBarItemStyle = tw.div`
     w-full h-[46px] mt-2.5 rounded-[10px] hover:text-color-white hover:bg-color-gray
     flex items-center cursor-pointer transition-all
     dark:hover:bg-color-white dark:hover:text-color-text
`;

const SideBarItemIcon = tw.div`mx-5`;

const SideBarItemTitle = tw.div`mr-5`;
