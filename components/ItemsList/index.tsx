/** @format */

import { Item, ActionsType } from "@/types";
import { Table } from "@sumup/circuit-ui";
import { PopoverComponent } from "components/Button/PopoverComponent";

export const ItemsList = ({
  items,
  onClickAction,
}: {
  items: Item[];
  onClickAction: (key: keyof ActionsType, i: number) => void;
}) => {
  const headersCell = [
    {
      children: "Title",
    },
    {
      children: "Category",
    },
    {
      children: "Price",
    },
    null,
  ];

  const rows = items.map((element, index) => {
    return [
      element.title,
      element.category,
      element.price,
      {
        children: (
          <PopoverComponent
            onClickDelete={() => onClickAction("delete", index)}
            onClickEdit={() => onClickAction("edit", index)}
          />
        ),
      },
    ];
  });

  return <Table headers={headersCell} rows={rows} />;
};
