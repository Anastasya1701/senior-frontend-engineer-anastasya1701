/** @format */

import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { SectionItemWrapper } from "./styled";

type SectionItemHOCProps = {
  children: ReactJSXElement;
};

export const SectionItemHOC = ({ children }: SectionItemHOCProps) => {
  return <SectionItemWrapper>{children}</SectionItemWrapper>;
};
