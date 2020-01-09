import React, { FC } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import tw from "tailwind.macro";

const Header: FC = () => {
  return (
    <HeaderBase>
      <h1 className="text-4xl">
        <Link to="/">mt_coff's blog</Link>
      </h1>
    </HeaderBase>
  );
};

const HeaderBase = styled.header`
  ${tw`w-full tablet:w-10/12 desktop:w-8/12 m-auto flex flex-col items-center py-8`}
`;

export default Header;
