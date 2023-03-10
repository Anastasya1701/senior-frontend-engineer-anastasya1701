/** @format */

import { EmptyPage } from "components/EmptyPage";
import { ItemLibraryWrapper, ItemLibraryHeader } from "./styled";
import { ItemsList } from "components/ItemsList";
import { Item, ActionsType } from "@/types";

type ItemLibraryProps = {
  btnVales: { title: string; onClick: () => void };
  items: Item[];
  onClickAction: (key: keyof ActionsType, i: number) => void;
};

export const ItemLibrary = ({
  btnVales,
  items,
  onClickAction,
}: ItemLibraryProps) => {
  return (
    <ItemLibraryWrapper>
      <ItemLibraryHeader>Item Library</ItemLibraryHeader>
      {items.length ? (
        <ItemsList items={items} onClickAction={onClickAction} />
      ) : (
        <EmptyPage btnVales={btnVales} />
      )}
    </ItemLibraryWrapper>
  );
};
