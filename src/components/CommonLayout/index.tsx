import { Box, Flex, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const CommonLayout: FC = ({ children }) => {
  return (
    <Flex h="100vh" direction="column">
      <Header />
      <Flex flex="1" direction="row" m="32">
        <Box as="main" flex="1">
          {children}
        </Box>
        <VStack maxW="32" width="100%" display={{ sm: "none", md: "block" }}>
          <Box p="4">hoge</Box>
        </VStack>
      </Flex>
      <Footer />
    </Flex>
  );
};
