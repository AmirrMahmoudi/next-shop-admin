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
import { editCoupon } from "@/actions/coupons";

const EditCoupon = ({ coupon }) => {
  const [state, formAction] = useFormState(editCoupon, {});
  const router = useRouter();
  const [dateExpire, setDateExpire] = useState({
    persian: coupon.expired_at,
    gregorian: coupon.expired_at_gregorian,
  });

  useEffect(() => {
    toast(state?.message, { type: `${state?.status}` });
    if (state?.status === "success") {
      router.push("/coupons");
    }
  }, [state]);

  function changeDateExpire(value) {
    setDateExpire({
      persian: value,
      gregorian: value
        .convert(gregorian, gregorian_en)
        .format("YYYY-MM-DD HH:mm:ss"),
    });
  }

  return (
    <form action={formAction} className="row gy-4">
      <div className="col-md-3">
        <label className="form-label">کد</label>
        <input
          name="code"
          defaultValue={coupon.code}
          type="text"
          className="form-control"
        />
      </div>

      <div className="col-md-3">
        <label className="form-label">درصد</label>
        <input
          name="percentage"
          defaultValue={coupon.percentage}
          type="text"
          className="form-control"
        />
      </div>

      <div className="col-md-3">
        <label className="form-label">تاریخ انقضا</label>
        <DatePicker
          inputClass="form-control"
          value={dateExpire.persian}
          calendar={persian}
          locale={persian_fa}
          onChange={changeDateExpire}
          format="YYYY-MM-DD HH:mm:ss"
        />

        <input name="expired_at" value={dateExpire.gregorian} type="hidden" />
      </div>

      <input type="hidden" name="id" defaultValue={coupon.id} />

      <div>
        <SubmitButton title="ویرایش تخفیف" style="btn btn-outline-dark mt-3" />
      </div>
    </form>
  );
};
export default EditCoupon;
