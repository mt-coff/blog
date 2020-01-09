import React, { FC } from "react";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

type TagProps = {
  to: string;
  className: string;
};

const StyledLink = styled(Link)`
  ${tw`border rounded-full py-1 px-2`}
`;

const Tag: FC<TagProps> = props => {
  return (
    <StyledLink className={props.className} to={props.to}>
      <FontAwesomeIcon className="mr-1" icon={faTag} />
      {props.children}
    </StyledLink>
  );
};

export default Tag;
