import tw from "twin.macro";
import { FlexCenterStyle } from "../GlobalStyle";
import ButtonChangeTheme from "./ButtonChangeTheme";
import MyProfile from "./MyProfile";
import TerminalIcon from "@mui/icons-material/Terminal";
import Link from "next/link";
const Header = () => {
  return (
    <HeaderStyle>
      <HeaderContainer>
        <Link href="/">
          <a>
            <FlexCenterStyle>
              <TerminalIcon />
              <LogoStyle>Mini NextJs</LogoStyle>
            </FlexCenterStyle>
          </a>
        </Link>
        <FlexCenterStyle>
          <Link href="/admin">
            <a>Admin</a>
          </Link>
          <ButtonChangeTheme />
          <MyProfile />
        </FlexCenterStyle>
      </HeaderContainer>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = tw.header`
  w-full h-[78px] px-5 bg-white dark:bg-color-dark-primary text-color-text dark:text-color-white border-b
`;

const HeaderContainer = tw.div`
    h-full flex justify-between items-center
`;

const LogoStyle = tw.div`
    ml-2 font-bold
`;
