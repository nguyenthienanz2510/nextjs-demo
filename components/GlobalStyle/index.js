import tw, { styled } from "twin.macro";

export const FlexCenterStyle = tw.div`
    flex justify-center items-center
`;

export const DivStyle = tw.div``;

export const DivHideScrollBar = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const StyleH4 = tw.h4`
  font-bold
`;

export const StyleSpan = tw.span``;

export const StyleSpanSmall = tw.span`text-sm`;
