import Link from "next/link";
import tw from "twin.macro";

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderWrapper>
        <Link href="/">
          <LogoWrapper>DEMO NEXTJS</LogoWrapper>
        </Link>
        <NavigationBar>
          <Link href="/">
            <NavigationBarItem>Home</NavigationBarItem>
          </Link>
          <Link href="/about">
            <NavigationBarItem>About</NavigationBarItem>
          </Link>
        </NavigationBar>
        <SignInWrapper>
          <Link href="/register">
            <RegisterBtn>Register</RegisterBtn>
          </Link>
          <Link href="/signin">
            <SignInBtn>Sign In</SignInBtn>
          </Link>
        </SignInWrapper>
      </HeaderWrapper>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = tw.div`
    h-20 border-b w-full px-5
`;

const HeaderWrapper = tw.div`
  h-full flex justify-between items-center
`;

const LogoWrapper = tw.div`
  min-w-[200px] text-2xl font-semibold cursor-pointer
`;

const NavigationBar = tw.div`

`;

const NavigationBarItem = tw.a`
  mx-2 cursor-pointer hover:text-color-primary transition-all
`;

const SignInWrapper = tw.div`

`;

const SignInBtn = tw.button`
  px-5 py-2 border border-color-primary text-color-primary rounded hover:text-color-white hover:bg-color-primary transition-all 
`;

const RegisterBtn = tw.button`
  px-5 py-2 text-color-secondary underline
`;
