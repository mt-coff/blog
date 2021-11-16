import { Box, Flex } from "@chakra-ui/react";
import React, { FC } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const CommonLayout: FC = ({ children }) => {
  return (
    <Flex h="100vh" direction="column">
      <Header />
      <Box as="main" flex="1">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};
