import tw from "twin.macro";
import { FlexCenterStyle } from "../GlobalStyle";
import ButtonChangeTheme from "./ButtonChangeTheme";
import MyProfile from "./MyProfile";

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderContainer>
        <div>My Logo</div>
        <FlexCenterStyle>
          <ButtonChangeTheme />
          <MyProfile />
        </FlexCenterStyle>
      </HeaderContainer>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = tw.header`
  w-full h-[78px] px-5 bg-white dark:bg-color-dark-primary text-color-text dark:text-color-white
`;

const HeaderContainer = tw.div`
    h-full flex justify-between items-center
`;
