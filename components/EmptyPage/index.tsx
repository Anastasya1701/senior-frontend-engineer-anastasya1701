/** @format */
import { Headline } from "@sumup/circuit-ui";
import { ButtonComponent } from "components/Button";
import {
  EmptyPageImg,
  EmptyPageSection,
  HeadlineWrapper,
  EmptyPageParagraph,
} from "./styled";

type EmptyPageProps = {
  btnVales: { title: string; onClick: () => void };
};

export const EmptyPage = ({ btnVales }: EmptyPageProps) => {
  return (
    <EmptyPageSection>
      <EmptyPageImg />
      <HeadlineWrapper>
        <Headline as="h2" size="two">
          Add your first item
        </Headline>
      </HeadlineWrapper>
      <EmptyPageParagraph>
        Create a catalog of your products or services and speed up checkout.
      </EmptyPageParagraph>
      <ButtonComponent onClick={btnVales.onClick} title={btnVales.title} />
    </EmptyPageSection>
  );
};
