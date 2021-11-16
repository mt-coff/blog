import { IconButton, useColorMode } from "@chakra-ui/react";
import { useMemo } from "react";
import { MdBrightnessHigh, MdDarkMode } from "react-icons/md";

export const ModeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const modeIcon = useMemo(
    () => (colorMode === "light" ? <MdDarkMode /> : <MdBrightnessHigh />),
    [colorMode]
  );
  const nextMode = useMemo(
    () => (colorMode === "light" ? "dark" : "light"),
    [colorMode]
  );

  return (
    <IconButton
      aria-label={`Switch to ${nextMode} mode`}
      icon={modeIcon}
      onClick={toggleColorMode}
      variant="ghost"
    />
  );
};
