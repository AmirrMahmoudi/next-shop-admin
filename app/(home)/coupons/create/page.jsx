"use client";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import gregorian from "react-date-object/calendars/gregorian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian_en from "react-date-object/locales/gregorian_en";

import { toast } from "react-toastify";

import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";

import SubmitButton from "@/components/SubmitButton";
import { createCoupon } from "@/actions/coupons";

const CreateCouponPage = () => {
  const [state, formAction] = useFormState(createCoupon, {});
  const router = useRouter();
  const [dateExpire, setDateExpire] = useState("");

  useEffect(() => {
    toast(state?.message, { type: `${state?.status}` });
    if (state?.status === "success") {
      router.push("/coupons");
    }
  }, [state]);

  function changeDateExpire(value) {
    setDateExpire(
      value.convert(gregorian, gregorian_en).format("YYYY-MM-DD HH:mm:ss")
    );
  }

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 className="fw-bold">ایجاد تخفیف</h4>
      </div>

      <form action={formAction} className="row gy-4">
        <div className="col-md-3">
          <label className="form-label">کد</label>
          <input type="text" name="code" className="form-control" />
        </div>
        <div className="col-md-3">
          <label className="form-label">درصد</label>
          <input type="text" name="percentage" className="form-control" />
        </div>

        <div className="col-md-3">
          <label className="form-label">تاریخ انقضا</label>
          <DatePicker
            inputClass="form-control"
            calendar={persian}
            locale={persian_fa}
            onChange={changeDateExpire}
            format="YYYY-MM-DD HH:mm:ss"
          />

          <input name="expired_at" value={dateExpire} type="hidden" />
        </div>
        <div>
          <SubmitButton
            title={"ایجاد تخفیف"}
            style="btn btn-outline-dark mt-3"
          />
        </div>
      </form>
    </>
  );
};
export default CreateCouponPage;
