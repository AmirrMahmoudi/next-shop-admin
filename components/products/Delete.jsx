"use client";

import { useFormState } from "react-dom";
import SubmitButton from "../SubmitButton";
import { deleteProduct } from "@/actions/products";

const DeleteProduct = ({ id }) => {
  const [state, formAction] = useFormState(deleteProduct, {});

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <SubmitButton title={"حذف"} style={"btn btn-dark mt-3"} />
    </form>
  );
};
export default DeleteProduct;
