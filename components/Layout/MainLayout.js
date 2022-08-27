import tw from "twin.macro";
import FriendBar from "../FriendBar";
import Header from "../Header";
import SideBar from "../SideBar";

const MainLayout = ({ children }) => {
  return (
    <MainLayoutStyle>
      <Header />
      <BodyStyle>
        <SideBar />
        <MessageLayout>
          <FriendBar />
          <MessageContainer>{children}</MessageContainer>
        </MessageLayout>
      </BodyStyle>
    </MainLayoutStyle>
  );
};

export default MainLayout;

const MainLayoutStyle = tw.div`min-h-screen flex flex-col bg-color-white dark:bg-color-dark-primary dark:text-color-white`;

const BodyStyle = tw.div`
  flex flex-1
`;

const MessageLayout = tw.div`
bg-gray-100 dark:bg-color-dark-secondary flex-1 mr-7 rounded-t-2xl px-[30px] pt-7 flex gap-[30px]
`;

const MessageContainer = tw.div`
  flex-1 rounded-t-2xl bg-color-white dark:bg-color-dark-primary
`;
