import tw from "twin.macro";
import ConversationBar from "../ConversationBar";
import Header from "../Header";
import SideBar from "../SideBar";

const MainLayout = ({ children }) => {
  return (
    <MainLayoutStyle>
      <Header />
      <BodyStyle>
        <SideBar />
        <MessageLayout>
          <ConversationBar />
          <MessageContainer>{children}</MessageContainer>
        </MessageLayout>
      </BodyStyle>
    </MainLayoutStyle>
  );
};

export default MainLayout;

const MainLayoutStyle = tw.div`overflow-hidden h-screen bg-color-white dark:bg-color-dark-primary dark:text-color-white`;

const BodyStyle = tw.div`
  flex h-full
`;

const MessageLayout = tw.div`
bg-gray-100 dark:bg-color-dark-secondary mr-7 rounded-t-2xl px-[30px] pt-7 flex gap-[30px] flex-grow
`;

const MessageContainer = tw.div`
  rounded-t-2xl bg-color-white dark:bg-color-dark-primary flex-grow
`;
