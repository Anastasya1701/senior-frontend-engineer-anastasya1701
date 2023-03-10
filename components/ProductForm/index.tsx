/** @format */

import { SectionItemHOC } from "../SectionItemHOC";
import { TextariaComponent } from "./TextariaComponent";
import { InputItemComponent } from "./InputItemComponent";
import { FormWrapper, ItemEditorForm, Form } from "./styled";
import { TreeNode } from "react-dropdown-tree-select";
import { Error, Item } from "types";

type Props = {
  onChange: (key: string, value: string | TreeNode[]) => void;
  error: Error;
  item: Item;
};

export const ProductForm = ({ onChange, error, item }: Props) => {
  return (
    <FormWrapper>
      <ItemEditorForm>
        <Form aria-label="Add item">
          <SectionItemHOC aria-label="tittle & price & category">
            <InputItemComponent onChange={onChange} error={error} item={item} />
          </SectionItemHOC>
          <SectionItemHOC aria-label="Item description">
            <TextariaComponent onChange={onChange} error={error} item={item} />
          </SectionItemHOC>
        </Form>
      </ItemEditorForm>
    </FormWrapper>
  );
};
