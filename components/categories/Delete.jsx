"use client";

import { useFormState } from "react-dom";
import SubmitButton from "../SubmitButton";
import { deleteCategory } from "@/actions/categories";

const DeleteCategory = ({ id }) => {
  const [state, formAction] = useFormState(deleteCategory, {});

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <SubmitButton title={"حذف"} style={"btn btn-dark mt-3"} />
    </form>
  );
};
export default DeleteCategory;
