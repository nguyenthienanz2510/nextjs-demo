import Footer from "../Footer";
import Header from "../Header";
import tw from "twin.macro";

const MainLayout = ({children}) => {
    return (
        <MainLayoutStyle>
          <Header/>
          <ChildrenStyle>{children}</ChildrenStyle>
          <Footer/>
        </MainLayoutStyle>
    );
}

export default MainLayout;

const MainLayoutStyle = tw.div`
    flex min-h-screen flex-col
`

const ChildrenStyle = tw.main`
    flex-grow
`