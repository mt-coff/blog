import React, { FC } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

type ArticleThumbnailProps = {
  className: string;
  title: string;
  excerpt: string;
  path: string;
  date: string;
  tags: Array<string>;
};

const StyledLink = styled(Link)`
  ${tw`flex shadow-md border rounded py-2 px-3 w-full`};
`;

const ExcerptWrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ArticleThumbnail: FC<ArticleThumbnailProps> = ({
  className,
  title,
  excerpt,
  path,
  date,
  tags
}) => {
  return (
    <StyledLink className={className} to={`/post/${path}`}>
      <div className="flex flex-col w-full justify-between">
        <div className="text-xl font-semibold truncate pb-1">{title}</div>
        <ExcerptWrapper className="h-12">{excerpt}</ExcerptWrapper>
        <div>
          <div className="text-sm py-1">
            <FontAwesomeIcon className="mr-1" icon={faTags} />
            {tags.map(tag => (
              <span key={tag} className="mr-2 border rounded px-1">
                {tag}
              </span>
            ))}
          </div>
          <div className="text-right">
            <FontAwesomeIcon className="mr-1" icon={faCalendarAlt} />
            {date}
          </div>
        </div>
      </div>
    </StyledLink>
  );
};

export default ArticleThumbnail;
