import tw from "twin.macro";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@material-ui/core";

const FriendBar = () => {
  return (
    <FriendBarStyle>
      <Search>
        <IconButtonStyle>
          <IconButton>
            <SearchIconStyle />
          </IconButton>
        </IconButtonStyle>
        <SearchInput placeholder="Search..." />
      </Search>
      <ButtonStartNewChat>Start a new chat</ButtonStartNewChat>
    </FriendBarStyle>
  );
};

export default FriendBar;

const FriendBarStyle = tw.div`
  w-[364px] p-5 rounded-t-2xl bg-color-white dark:bg-color-dark-primary
`;

const Search = tw.div`
    flex relative items-center
`;

const SearchInput = tw.input`
    h-[42px] w-full pl-12 border border-color-gray-40 rounded-[10px] dark:bg-color-dark-primary
`;

const IconButtonStyle = tw.div`
    absolute
`;

const SearchIconStyle = tw(SearchIcon)`dark:text-color-white`;

const ButtonStartNewChat = tw.button`
    mt-2.5 bg-color-gray-20 rounded-[10px] w-full h-[42px] flex justify-center items-center 
`;
