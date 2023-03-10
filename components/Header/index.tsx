/** @format */

import { HeaderWrapper, LogoHeader } from "./styled";
import { ButtonComponent } from "components/Button";
import { LogoIcon } from "icons/LogoIcon";

type HeaderProps = {
  btnVales: { title: string; onClick: () => void };
};

export const Header = ({ btnVales }: HeaderProps) => {
  return (
    <HeaderWrapper role="banner">
      <LogoHeader>
        <LogoIcon />
      </LogoHeader>
      <ButtonComponent onClick={btnVales.onClick} title={btnVales.title} />
    </HeaderWrapper>
  );
};
