import {
  Heading,
  UnorderedList,
  OrderedList,
  ListItem,
  Text,
  Code,
  Box,
  Link,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { AdventCalendar } from "../AdventCalendar/idnex";

type Props = { children: string };

export const MDXComponents = (title?: string) => ({
  h1: (props: Props) =>
    !title && <Heading as="h1" size="xl" py={2} {...props} />,
  h2: (props: Props) => <Heading as="h2" size="lg" py={2} {...props} />,
  h3: (props: Props) => <Heading as="h3" size="md" py={2} {...props} />,
  h4: (props: Props) => <Heading as="h4" size="sm" py={2} {...props} />,
  h5: (props: Props) => <Heading as="h5" size="xs" py={2} {...props} />,
  h6: (props: Props) => <Heading as="h6" size="xs" py={2} {...props} />,
  ul: (props: Props) => <UnorderedList py={2} ml={8} {...props} />,
  ol: (props: Props) => <OrderedList py={2} ml={8} {...props} />,
  li: (props: Props) => <ListItem {...props} />,
  p: (props: Props) => <Text whiteSpace={"pre-line"} py={2} {...props} />,
  inlineCode: (props: Props) => <Code px={1.5} {...props} />,
  AdventCalendar: (props: React.ComponentProps<typeof AdventCalendar>) => (
    <AdventCalendar {...props} />
  ),
  hr: () => <Box as="hr" my={4} />,
  a: (props: Props & { href: string }) => (
    <Link color="blue.300" mx={1} {...props} />
  ),
});
