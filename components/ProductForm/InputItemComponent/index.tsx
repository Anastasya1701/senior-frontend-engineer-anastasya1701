/** @format */
import { InputWrapper } from "../styled";
import { Input, CurrencyInput } from "@sumup/circuit-ui";
import DropdownTreeSelect from "react-dropdown-tree-select";
import { TreeNode } from "react-dropdown-tree-select";
import { Error, Item } from "types";
import inputNodes from "utils/categories.json";
import { serializeNode } from "utils/serializer";

type Props = {
  onChange: (key: string, value: string | TreeNode[]) => void;
  error: Error;
  item: Item;
};

export const InputItemComponent = ({ onChange, error, item }: Props) => {
  const onChangeValue = (event: React.SyntheticEvent, label: string): void => {
    const target = event.target as HTMLInputElement;

    onChange(label, target.value);
  };

  const categories = serializeNode(inputNodes.categories);

  const onChangeDropDown = (
    currentNode: TreeNode,
    selectedNodes: TreeNode[]
  ): void => {
    let categoryValue = "";
    selectedNodes.forEach((e) => {
      categoryValue += `${e.label} `;
    });
    console.log(currentNode);

    onChange("category", categoryValue);
  };

  return (
    <>
      <Input
        label="Title"
        invalid={error.title}
        onChange={(e) => onChangeValue(e, "title")}
        value={item.title}
      />
      <InputWrapper>
        <CurrencyInput
          label="Price"
          currency="PLN"
          placeholder={0}
          invalid={error.price}
          onChange={(e) => onChangeValue(e, "price")}
          value={item.price}
        />
        <div className="wrapperCategories">
          <span className="spanCategories">Categories</span>
          <DropdownTreeSelect data={categories} onChange={onChangeDropDown} />
        </div>
      </InputWrapper>
    </>
  );
};
