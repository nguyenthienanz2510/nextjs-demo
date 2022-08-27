import { useTheme } from "next-themes";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import tw from "twin.macro";
import { IconButton } from "@material-ui/core";

const ButtonChangeTheme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {theme === "dark" ? (
        <IconButtonStyle>
          <LightModeIconStyle
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        </IconButtonStyle>
      ) : (
        <IconButtonStyle>
          <DarkModeIconStyle
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        </IconButtonStyle>
      )}
    </>
  );
};

export default ButtonChangeTheme;

const IconButtonStyle = tw(IconButton)`
  cursor-pointer
`;

const LightModeIconStyle = tw(LightModeIcon)`
  text-color-white
`;

const DarkModeIconStyle = tw(DarkModeIcon)`
  text-color-text
`;
