import React, { FC, useState } from "react";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import { ColorModeContext, ColorMode } from "../../hooks/ColorMode";

const lightTheme = {};
const darkTheme = {};

const ThemeProvider: FC = ({ children }) => {
  const [colorMode, setColorMode] = useState<ColorMode>("light");
  const toggleColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  return (
    <EmotionThemeProvider
      theme={colorMode === "light" ? lightTheme : darkTheme}
    >
      <ColorModeContext.Provider
        value={{
          colorMode,
          setColorMode: toggleColorMode
        }}
      >
        {children}
      </ColorModeContext.Provider>
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
