import { Flex, Heading, Box } from "@chakra-ui/react";
import { ModeToggleButton } from "../ModeToggleButton";

export const Header = () => {
  return (
    <Flex as="header" shadow="sm" justify="space-between" p="4">
      <Heading as="h1">blog.mt_coff</Heading>
      <Box>
        <ModeToggleButton />
      </Box>
    </Flex>
  );
};
