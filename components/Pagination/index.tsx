import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { VFC } from "react";

type Props = {
  current: number;
  total: number;
  perPage: number;
  toPrev: () => void;
  toNext: () => void;
};

const Pagination: VFC<Props> = ({ current, total, toPrev, toNext }) => {
  return (
    <nav className="flex items-center justify-between">
      <ul className="flex">
        {[...new Array(total)].map((_, idx) => (
          <li
            className={`border rounded-full mr-2 py-2 px-4 ${
              idx + 1 === current ? "text-gray-400" : ""
            }`}
            key={idx}
          >
            {idx + 1}
          </li>
        ))}
      </ul>
      <div className="flex">
        <button
          className={`w-7 mx-2 border px-2 rounded ${
            1 === current ? "text-gray-400" : ""
          }`}
          onClick={toPrev}
        >
          <FontAwesomeIcon icon={faCaretLeft} />
        </button>
        <button
          className={`w-7 mx-2 border px-2 rounded ${
            current === total ? "text-gray-400" : ""
          }`}
          onClick={toNext}
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
