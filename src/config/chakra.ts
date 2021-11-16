import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { GlobalStyleProps, mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  fonts: {
    body: "'Noto Sans JP', sans-serif",
    heading: "'Noto Sans JP', sans-serif",
    mono: "'Noto Sans JP', sans-serif",
  },
  styles: {
    global: (props: GlobalStyleProps) => ({
      body: {
        bg: mode("#ffffff", "#001A26")(props),
      },
    }),
  },
});
