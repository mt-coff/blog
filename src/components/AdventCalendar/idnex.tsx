import React, { VFC } from "react";
import { Link, Text } from "@chakra-ui/react";

type Props = {
  calendar: {
    name: string;
    url: string;
  };
  day: number;
  next?: {
    author?: string;
    title?: string;
    url?: string;
  };
  prev?: {
    author?: string;
    title?: string;
    url?: string;
  };
};
export const AdventCalendar: VFC<Props> = ({ calendar, day, prev, next }) => {
  return (
    <Text>
      この記事は
      <Link
        color="blue.300"
        mx={1}
        href={calendar.url}
        target="_blank"
        rel="noreferrer"
      >
        {calendar.name}
      </Link>
      の{day}
      日目の記事です。
      <br />
      {day > 1 && prev && prev.author && (
        <>
          {day - 1}日目は {prev?.author} さんの
          {prev.title && prev.url ? (
            <Link
              color="blue.300"
              mx={1}
              href={prev.url}
              target="_blank"
              rel="noreferrer"
            >
              {prev.title}
            </Link>
          ) : (
            "記事です。"
          )}
        </>
      )}
      {day < 25 && next && next.author && (
        <>
          {day + 1}日目は {next.author} さんの
          {next.title && next.url ? (
            <Link
              color="blue.300"
              mx={1}
              href={next.url}
              target="_blank"
              rel="noreferrer"
            >
              {next.title}
            </Link>
          ) : (
            "記事です。"
          )}
        </>
      )}
    </Text>
  );
};
