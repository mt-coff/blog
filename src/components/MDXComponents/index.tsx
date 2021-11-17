import {
  Heading,
  UnorderedList,
  OrderedList,
  ListItem,
  Text,
  Code,
} from "@chakra-ui/react";

type Props = { children: string };

export const MDXComponents = () => ({
  h1: (props: Props) => <Heading as="h1" size="2xl" py={2} {...props} />,
  h2: (props: Props) => <Heading as="h2" size="xl" py={2} {...props} />,
  h3: (props: Props) => <Heading as="h3" size="lg" py={2} {...props} />,
  h4: (props: Props) => <Heading as="h4" size="md" py={2} {...props} />,
  h5: (props: Props) => <Heading as="h5" size="sm" py={2} {...props} />,
  h6: (props: Props) => <Heading as="h6" size="xs" py={2} {...props} />,
  ul: (props: Props) => <UnorderedList py={2} ml={8} {...props} />,
  ol: (props: Props) => <OrderedList py={2} ml={8} {...props} />,
  li: (props: Props) => <ListItem {...props} />,
  p: (props: Props) => <Text py={2} {...props} />,
  inlineCode: (props: Props) => <Code px={1.5} {...props} />,
});
