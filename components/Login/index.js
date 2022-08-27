import { Button } from "@material-ui/core";
import { signInWithPopup } from "firebase/auth";
import Head from "next/head";
import tw from "twin.macro";
import { auth, provider } from "../../firebase";

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider).catch(alert);
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginStyle>
        <LoginWrapper>
          <LogoContainer>
            <Logo src="/images/emoij.png" />
          </LogoContainer>
          <Button onClick={signIn}>Sign In with Google</Button>
        </LoginWrapper>
      </LoginStyle>
    </>
  );
};

export default Login;

const LoginStyle = tw.div`
    flex justify-center items-center min-h-screen bg-gray-100
`;

const LoginWrapper = tw.div`
    bg-color-white p-10 rounded-2xl shadow-xl flex flex-col
`;

const LogoContainer = tw.div`w-[260px] h-[260px] mb-5`;

const Logo = tw.img`

`;
