import { VFC } from "react";
import { FrontMatter } from "../../types/frontMatter";
import style from "./index.module.css";
import Tag from "../Tag";

type Props = {
  frontMatter: FrontMatter;
};

const PostTitle: VFC<Props> = ({ frontMatter }) => {
  return (
    <section className={style["post-title"]}>
      <time className="w-full text-center block px-2 pt-2 mb-4">
        {frontMatter.created}
      </time>
      <h1 className="text-5xl font-semibold text-center">
        {frontMatter.title}
      </h1>
      <div className="flex flex-wrap justify-center mt-4">
        {frontMatter.tags.map((tag, idx) => (
          <Tag name={tag} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default PostTitle;
