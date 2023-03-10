/** @format */
import { TextArea } from "@sumup/circuit-ui";
import { FormH2, FormParagraph } from "../styled";
import { TreeNode } from "react-dropdown-tree-select";
import { Error, Item } from "types";

type Props = {
  onChange: (key: string, value: string | TreeNode[]) => void;
  error: Error;
  item: Item;
};

export const TextariaComponent = ({ onChange, error, item }: Props) => {
  return (
    <div>
      <FormH2>Item description</FormH2>
      <div>
        <FormParagraph>
          The description will appear on invoices and in the Online Store.
        </FormParagraph>
        <div>
          <TextArea
            placeholder="e.g. origin, material, dimensions"
            label="Description"
            invalid={error.description}
            value={item.description}
            onChange={(e) =>
              onChange("description", e.target.value)
            }></TextArea>
        </div>
        <FormParagraph>Characters left: 1000</FormParagraph>
      </div>
    </div>
  );
};
