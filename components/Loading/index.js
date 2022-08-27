import Head from "next/head";
import { PacmanLoader } from "react-spinners";
import tw, { styled } from "twin.macro";

const Loading = () => {
  return (
    <LoadingStyle>
      <Head>
        <title>Loading...</title>
      </Head>
      <PacmanLoaderWrapper>
        <PacmanLoader color="#FFAB00" size="60" />
      </PacmanLoaderWrapper>
    </LoadingStyle>
  );
};

export default Loading;

const LoadingStyle = tw.div`
    h-screen flex justify-center items-center
`;

const PacmanLoaderWrapper = tw.div`
pb-36
`;
