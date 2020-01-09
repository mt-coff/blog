import React, { FC } from "react";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { Link } from "gatsby";

type FooterProps = React.HTMLAttributes<HTMLElement>;

const Footer: FC<FooterProps> = props => {
  return (
    <FooterBase {...props}>
      <small>
        <Link to="/">mt_coff's blog</Link>
      </small>
      <small>© 2020 mt_coff All Rights Reserved.</small>
    </FooterBase>
  );
};

const FooterBase = styled.footer`
  ${tw`w-full tablet:w-10/12 desktop:w-8/12 m-auto flex flex-col items-center py-4`}
`;

export default Footer;
