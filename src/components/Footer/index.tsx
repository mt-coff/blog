import { Flex, Text, HStack, Link, Icon } from "@chakra-ui/react";
import { FaGithubSquare, FaTwitterSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <Flex
      as="footer"
      borderTop="solid 1px"
      borderColor="gray.200"
      mx="8"
      py="4"
      direction="column"
      align="center"
    >
      <HStack>
        <Link
          target="_blank"
          href="https://github.com/mt-coff"
          rel="noopener noreferrer"
        >
          <Icon as={FaGithubSquare} h={6} w={6} />
        </Link>
        <Link
          target="_blank"
          href="https://twitter.com/mt_coff"
          rel="noopener noreferrer"
        >
          <Icon as={FaTwitterSquare} h={6} w={6} />
        </Link>
      </HStack>
    </Flex>
  );
};
