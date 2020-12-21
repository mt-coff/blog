import { VFC } from "react";
import { FrontMatter } from "../../types/frontMatter";
import style from "./index.module.css";

type Props = {
  frontMatter: FrontMatter;
};

const PostTitle: VFC<Props> = ({ frontMatter }) => {
  return (
    <section className={style["post-title"]}>
      <h1 className="text-5xl font-semibold text-center">
        {frontMatter.title}
      </h1>
      <time className="w-full text-right block px-2 pt-2">
        {frontMatter.created}
      </time>
    </section>
  );
};

export default PostTitle;
