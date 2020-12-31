import { FC } from "react";
import BaseLayout from "../components/BaseLayout";
import MDX from "../components/MDX";
import MetaData from "../components/MetaData";
import PostTitle from "../components/PostTitle";
import { FrontMatter } from "../types/frontMatter";

type Props = {
  frontMatter: FrontMatter;
};

const BlogPostLayout: FC<Props> = ({ children, frontMatter }) => {
  return (
    <>
      <MetaData
        title={frontMatter.title}
        image={`/img/${frontMatter.href}.png`}
      />
      <BaseLayout>
        <article className="flex-grow max-w-screen-md w-full mx-4 mb-8 px-4 md:px-0">
          <PostTitle frontMatter={frontMatter} />
          <MDX>{children}</MDX>
        </article>
      </BaseLayout>
    </>
  );
};

export default BlogPostLayout;
