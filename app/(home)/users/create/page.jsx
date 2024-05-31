"use client";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import SubmitButton from "@/components/SubmitButton";
import { createUser } from "@/actions/users";

const CreateUserPage = () => {
  const [state, formAction] = useFormState(createUser, {});
  const router = useRouter();

  useEffect(() => {
    toast(state?.message, { type: `${state?.status}` });
    if (state?.status === "success") {
      router.push("/users");
    }
  }, [state]);
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 className="fw-bold">ایجاد کاربر</h4>
      </div>

      <form action={formAction} className="row gy-4">
        <div className="col-md-3">
          <label className="form-label">نام</label>
          <input type="text" name="name" className="form-control" />
        </div>
        <div className="col-md-3">
          <label className="form-label">ایمیل</label>
          <input type="text" name="email" className="form-control" />
        </div>
        <div className="col-md-3">
          <label className="form-label">شماره تماس</label>
          <input type="text" name="cellphone" className="form-control" />
        </div>
        <div className="col-md-3">
          <label className="form-label">رمز عبور</label>
          <input type="text" name="password" className="form-control" />
        </div>
        <div>
          <SubmitButton
            title={"ایجاد کاربر"}
            style="btn btn-outline-dark mt-3"
          />
        </div>
      </form>
    </>
  );
};
export default CreateUserPage;
