/** @format */

import { Close } from "@sumup/icons";
import { CloseIconWrapper } from "./styled";

export const CloseIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <CloseIconWrapper onClick={onClick}>
      <Close />
    </CloseIconWrapper>
  );
};
