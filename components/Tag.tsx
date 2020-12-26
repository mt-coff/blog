import { VFC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

type Props = {
  name: string;
};

const Tag: VFC<Props> = ({ name }) => {
  return (
    <span className="mr-3">
      <Link href={`/tags/${name}`}>
        <span className="cursor-pointer flex">
          <FontAwesomeIcon className="w-4 h-auto mr-1" icon={faTag} />
          {name}
        </span>
      </Link>
    </span>
  );
};

export default Tag;
