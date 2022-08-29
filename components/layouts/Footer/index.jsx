import tw from "twin.macro";

const Footer = () => {
  return <FooterStyle>This is Footer</FooterStyle>;
};

export default Footer;

const FooterStyle = tw.div`
    h-20 border-t w-full flex justify-center items-center
`;
