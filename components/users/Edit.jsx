"use client";

import { useEffect } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import SubmitButton from "../SubmitButton";
import { editUser } from "@/actions/users";
import { toast } from "react-toastify";

const EditUser = ({ user }) => {
  const [state, formAction] = useFormState(editUser, {});
  const router = useRouter();

  useEffect(() => {
    toast(state?.message, { type: `${state?.status}` });
    if (state?.status === "success") {
      router.push("/users");
    }
  }, [state]);
  return (
    <form action={formAction} className="row gy-4">
      <div className="col-md-3">
        <label className="form-label">نام</label>
        <input
          type="text"
          name="name"
          defaultValue={user.name}
          className="form-control"
        />
      </div>
      <div className="col-md-3">
        <label className="form-label">ایمیل</label>
        <input
          type="text"
          name="email"
          defaultValue={user.email}
          className="form-control"
        />
      </div>
      <div className="col-md-3">
        <label className="form-label">شماره تماس</label>
        <input
          type="text"
          name="cellphone"
          defaultValue={user.cellphone}
          className="form-control"
        />
      </div>
      <div className="col-md-3">
        <label className="form-label">رمز عبور</label>
        <input type="text" name="password" className="form-control" />
      </div>
      <input type="hidden" name="id" defaultValue={user.id} />
      <div>
        <SubmitButton
          title={"ویرایش کاربر"}
          style="btn btn-outline-dark mt-3"
        />
      </div>
    </form>
  );
};

export default EditUser;
