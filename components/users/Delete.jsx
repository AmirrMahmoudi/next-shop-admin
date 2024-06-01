"use client";

import { useFormState } from "react-dom";
import SubmitButton from "../SubmitButton";
import { deleteUser } from "@/actions/users";

const DeleteUser = ({ id }) => {
  const [state, formAction] = useFormState(deleteUser, {});

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <SubmitButton title={"حذف"} style={"btn btn-dark mt-3"} />
    </form>
  );
};
export default DeleteUser;
