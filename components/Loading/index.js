import React from "react";
import { ScaleLoader } from "react-spinners";
import tw from "twin.macro";
import { useLoadingContext } from "../../context/loading";

export default function SpinnerComponent() {
  const [loading, setLoading] = useLoadingContext();

  console.log("[LOADING ==>]", loading)

  return loading && (
    <LoadingStyle>
      <ScaleLoader color="#ff6500" />
    </LoadingStyle>
  )
}

const LoadingStyle = tw.div`z-[100] fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-[rgba(0,0,0,0.4)]`;
