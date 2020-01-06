import React, { FC } from "react";
import styled from "@emotion/styled";
import tw from "tailwind.macro";

type FooterProps = React.HTMLAttributes<HTMLElement>;

const Footer: FC<FooterProps> = props => {
  return (
    <FooterBase className={`w-full ${props.className}`} {...props}>
      footer
    </FooterBase>
  );
};

const FooterBase = styled.footer`
  ${tw`bg-red-100`}
`;

export default Footer;
