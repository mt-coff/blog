import { Box, Flex, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { CategoryList } from "../CategoryList";
import { Footer } from "../Footer";
import { Header } from "../Header";

type Props = {
  categories: string[];
};
export const CommonLayout: FC<Props> = ({ children, categories }) => {
  return (
    <Flex h="100vh" direction="column">
      <Header />
      <Flex flex="1" direction="row" mx={{ sm: 0, md: 8, lg: 16 }} my="8">
        <Box
          as="main"
          flex="1"
          px={{ sm: 3, md: 4 }}
          width="100%"
          overflow="auto"
        >
          {children}
        </Box>
        <VStack
          maxW="64"
          px={4}
          width="100%"
          display={{ sm: "none", md: "none", lg: "block" }}
          as="nav"
        >
          <CategoryList categories={categories} />
        </VStack>
      </Flex>
      <Footer />
    </Flex>
  );
};
