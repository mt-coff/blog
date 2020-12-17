import { FC } from "react";
import BaseLayout from "../components/BaseLayout";
import MDX from "../components/MDX";
import Profile from "../components/Profile";

type FrontMatter = {
  title: string;
  date: string;
};

type Props = {
  frontMatter: FrontMatter;
};

const BlogPostLayout: FC<Props> = ({ children, frontMatter }) => {
  return (
    <BaseLayout className="flex flex-col lg:flex-row px-4 my-8 w-full items-center lg:items-stretch lg:justify-end">
      <article className="flex-grow max-w-screen-md w-full">
        <MDX>{children}</MDX>
      </article>
      <Profile className="my-8 lg:my-0 lg:flex-grow-0" />
    </BaseLayout>
  );
};

export default BlogPostLayout;
