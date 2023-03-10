/** @format */

import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { light } from "@sumup/design-tokens";
import { BaseStyles } from "@sumup/circuit-ui";
import { Header } from "components/Header";
import { ItemLibrary } from "components/ItemLibrary";
import { ProductForm } from "components/ProductForm";
import { CloseIcon } from "icons/CloseIcon";
import { Item, Error, ActionsType } from "types";
import { TreeNode } from "react-dropdown-tree-select";

type Items = [] | Item[];

const initialItem = {
  title: "",
  category: "",
  price: 0,
  description: "",
  index: null,
} as Item;

const initiaError = {
  title: false,
  category: false,
  price: false,
  description: false,
} as Error;

export default function Home() {
  const [items, addItem] = useState([] as Items);
  const [item, setItem] = useState(initialItem);
  const [error, setError] = useState(initiaError);
  const [isEditItem, setIsEditItem] = useState(false);

  const actionObj: ActionsType = {
    delete: (index: number) => {
      const itemsArr = items.filter((e, i) => index !== i);
      setItem(initialItem);
      addItem(itemsArr);
    },
    edit: (index: number) => {
      const item = items.find((e, i) => index === i) as Item;
      item.index = index;

      setItem(item);
      setIsEditItem(true);
    },
  };

  const addNewItem = () => {
    setIsEditItem(true);
  };

  const verification = (item: Item) => {
    let hasError = false;

    for (let key in item) {
      if (!item[key as keyof Item] && key !== "index") {
        setError((error) => ({ ...error, [key]: true }));
        hasError = true;
      }
    }

    return hasError;
  };

  const saveForm = (arr: Item[]) => {
    addItem(arr);
    setIsEditItem(false);
    setItem(initialItem);
  };

  const saveItem = () => {
    const isVerified = !verification(item);
    let arrItems = [];

    if (isVerified) {
      if (item.index) {
        const itemsAfterEdit = items.filter((e) => e.index !== item.index);
        arrItems = [...itemsAfterEdit, { ...item, index: null }];
      } else {
        arrItems = [...items, item];
      }
      saveForm(arrItems);
    }
  };

  const closeForm = () => {
    setIsEditItem(false);
  };

  const onChange = (key: string, value: string | TreeNode[]) => {
    setItem((item) => ({ ...item, [key]: value }));

    if (value) {
      setError((error) => ({ ...error, [key]: false }));
    }
  };

  const onClickAction = (key: keyof ActionsType, index: number) => {
    actionObj[key](index);
  };

  const btnVales = isEditItem
    ? { title: "Save", onClick: saveItem }
    : { title: "Add item", onClick: addNewItem };

  return (
    <ThemeProvider theme={light}>
      <BaseStyles />
      <Header btnVales={btnVales} />
      {isEditItem ? (
        <>
          <CloseIcon onClick={closeForm} />
          <ProductForm onChange={onChange} error={error} item={item} />
        </>
      ) : (
        <ItemLibrary
          btnVales={btnVales}
          items={items}
          onClickAction={onClickAction}
        />
      )}
    </ThemeProvider>
  );
}
