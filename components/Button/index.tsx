/** @format */

import { Button } from "@sumup/circuit-ui";

type ButtonProps = {
  onClick: () => void;
  title: string;
};

export const ButtonComponent = ({ onClick, title }: ButtonProps) => {
  return (
    <Button variant="primary" size="giga" onClick={onClick}>
      {title}
    </Button>
  );
};
