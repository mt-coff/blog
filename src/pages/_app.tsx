import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { theme } from "../config/chakra";
import { CommonLayout } from "../components/CommonLayout";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CommonLayout>
        <Component {...pageProps} />
      </CommonLayout>
    </ChakraProvider>
  );
}

export default App;
