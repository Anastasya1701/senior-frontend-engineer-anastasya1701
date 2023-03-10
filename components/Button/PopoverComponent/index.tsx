/** @format */
import { PopOverButton, PopOverWrapper } from "../styled";
import { EditIcon } from "@/icons/EditIcon";
import { DeleteIcon } from "@/icons/DeleteIcon";

export const PopoverComponent = ({
  onClickDelete,
  onClickEdit,
}: {
  onClickDelete: () => void;
  onClickEdit: () => void;
}) => {
  return (
    <PopOverWrapper>
      <PopOverButton onClick={onClickEdit}>
        <EditIcon />
      </PopOverButton>
      <PopOverButton onClick={onClickDelete}>
        <DeleteIcon />
      </PopOverButton>
    </PopOverWrapper>
  );
};
