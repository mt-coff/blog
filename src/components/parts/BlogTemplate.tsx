import React, { FC } from "react";
import PageTemplate from "./PageTemplate";
import Title from "./Title";
import Permalink from "./Permalink";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Tag from "./Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

type BlogTemplateProps = {
  title: string;
  path: string;
  date: string;
  tags: Array<string>;
  meta?: {
    description?: string;
    keywords?: Array<string>;
  };
  prevPath?: string | null;
  prevTitle?: string | null;
  nextPath?: string | null;
  nextTitle?: string | null;
};

const BlogTemplate: FC<BlogTemplateProps> = ({
  title,
  path,
  date,
  tags,
  meta,
  children,
  prevPath,
  prevTitle,
  nextPath,
  nextTitle
}) => {
  return (
    <PageTemplate title={`${title} | mt-coff's blog`} meta={meta}>
      <article>
        <div>
          <FontAwesomeIcon className="mr-1" icon={faEdit} />
          {date}
        </div>
        <Title>
          <Link to={path}>{title}</Link>
        </Title>
        <TagsWrapper>
          {tags.map(tag => (
            <Tag className="mr-2" key={tag} to={`/tags/${tag}`}>
              {tag}
            </Tag>
          ))}
        </TagsWrapper>
        {children}
      </article>
      <Permalink
        prevPath={prevPath || null}
        prevTitle={prevTitle || null}
        nextPath={nextPath || null}
        nextTitle={nextTitle || null}
      />
    </PageTemplate>
  );
};

const TagsWrapper = styled.div`
  ${tw`flex flex-row`}
`;

export default BlogTemplate;
