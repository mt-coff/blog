import React, { FC } from "react";

type FooterProps = React.HTMLAttributes<HTMLElement>;

const Footer: FC<FooterProps> = props => {
  return (
    <footer className={`w-full ${props.className}`} {...props}>
      footer
    </footer>
  );
};

export default Footer;
