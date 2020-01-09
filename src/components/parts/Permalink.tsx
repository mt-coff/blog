import React, { FC } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faHome,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import tw from "tailwind.macro";

type PermalinkProps = {
  prevTitle: string | null;
  prevPath: string | null;
  nextPath: string | null;
  nextTitle: string | null;
};

const LinkWrapper = styled.div`
  ${tw`flex flex-row justify-between py-4`}
`;
const NextLink = styled(Link)`
  ${tw`text-gray-500 truncate w-1/3 text-left`}
`;
const PrevLink = styled(Link)`
  ${tw`text-gray-500 truncate w-1/3 text-right`}
`;

const Permalink: FC<PermalinkProps> = ({
  nextPath,
  prevPath,
  nextTitle,
  prevTitle
}) => {
  return (
    <LinkWrapper>
      {nextPath ? (
        <NextLink to={nextPath}>
          <FontAwesomeIcon className="mr-2" icon={faChevronLeft} />
          {nextTitle}
        </NextLink>
      ) : (
        <div className="w-1/3" />
      )}
      <Link to="/">
        <FontAwesomeIcon className="text-gray-500 text-xl" icon={faHome} />
      </Link>
      {prevPath ? (
        <PrevLink to={prevPath}>
          {prevTitle}
          <FontAwesomeIcon className="ml-2" icon={faChevronRight} />
        </PrevLink>
      ) : (
        <div className="w-1/3" />
      )}
    </LinkWrapper>
  );
};

export default Permalink;
