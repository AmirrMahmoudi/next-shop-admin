"use client";

import { useFormState } from "react-dom";
import SubmitButton from "../SubmitButton";
import { deleteCoupon } from "@/actions/coupons";

const DeleteCoupon = ({ id }) => {
  const [state, formAction] = useFormState(deleteCoupon, {});

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <SubmitButton title={"حذف"} style={"btn btn-dark mt-3"} />
    </form>
  );
};
export default DeleteCoupon;
