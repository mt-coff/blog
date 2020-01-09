import { createContext, useContext } from "react";

export type ColorMode = "light" | "dark";
export type ColorModeContext = {
  colorMode: ColorMode;
  setColorMode: () => void;
};

const defaultContext: ColorModeContext = {
  colorMode: "light",
  setColorMode: () => {}
};

export const ColorModeContext = createContext<ColorModeContext>(defaultContext);
export const useColorMode = () => useContext(ColorModeContext);
