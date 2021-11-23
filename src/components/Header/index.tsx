import { Flex, Heading, Box, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { ModeToggleButton } from "../ModeToggleButton";

export const Header = () => {
  return (
    <Flex as="header" shadow="sm" justify="space-between" p="4">
      <Heading as="h1">
        <NextLink href={"/"}>
          <Link _hover={{ textDecor: "none" }}>blog.mt_coff</Link>
        </NextLink>
      </Heading>
      <Box>
        <ModeToggleButton />
      </Box>
    </Flex>
  );
};
