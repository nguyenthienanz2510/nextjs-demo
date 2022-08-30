import { FormSignIn } from "../../components";
import MainLayout from "../../components/layouts/MainLayout";
import tw from "twin.macro";
import { TitleH1 } from "../../components/GlobalStyle";

const SignInPage = () => {
  return (
    <SignInPageStyle>
      <SignInWrapper>
        <TitleH1>Sign In</TitleH1>
        <FormSignIn />
      </SignInWrapper>
    </SignInPageStyle>
  );
};

export default SignInPage;

SignInPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

const SignInPageStyle = tw.div`
    flex justify-center items-center
`;

const SignInWrapper = tw.div`
    w-[500px] mt-40
`;
