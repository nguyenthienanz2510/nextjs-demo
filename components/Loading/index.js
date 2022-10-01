import React from "react";
import { ScaleLoader } from "react-spinners";
import tw from "twin.macro";

export default function SpinnerComponent() {
  // let isLoading = useSelector((state) => {
  //   return state.spinnerComponentReducer.isLoading;
  // });
  let isLoading = false;
  return isLoading ? (
    <LoadingStyle>
      <ScaleLoader color="#ff6500" />
    </LoadingStyle>
  ) : (
    <></>
  );
}

const LoadingStyle = tw.div`z-[100] fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-[rgba(0,0,0,0.4)]`;
