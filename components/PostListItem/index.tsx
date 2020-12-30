import { VFC } from "react";
import Link from "next/link";
import Tag from "../Tag";

type Props = {
  title: string;
  tags: string[];
  created: string;
  href: string;
};

const PostListItem: VFC<Props> = ({ title, href, tags, created }) => {
  return (
    <li className="list-none shadow p-4 mb-8">
      <time>{created}</time>
      <h2 className="text-2xl font-semibold">
        <Link href={href || ""}>{title}</Link>
      </h2>
      <div className="flex flex-wrap mt-2">
        {tags.map((tag, idx) => (
          <Tag name={tag} key={idx} />
        ))}
      </div>
    </li>
  );
};

export default PostListItem;
