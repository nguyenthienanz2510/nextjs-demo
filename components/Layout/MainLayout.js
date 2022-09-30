import tw from "twin.macro";
import Header from "../Header";

const MainLayout = ({ children }) => {
  return (
    <MainLayoutStyle>
      <Header />
      <main>{children}</main>
    </MainLayoutStyle>
  );
};

export default MainLayout;

const MainLayoutStyle = tw.div`overflow-hidden h-screen bg-color-white dark:bg-color-dark-primary dark:text-color-white`;
