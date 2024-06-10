import DeleteCoupon from "@/components/coupons/Delete";
import { getFetch } from "@/utils/fetch";

const CouponPage = async ({ params }) => {
  const coupon = await getFetch(`/coupons/${params.id}`);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 className="fw-bold">کد تخفیف : {coupon.code}</h4>
      </div>

      <div className="row gy-4">
        <div className="col-md-3">
          <label className="form-label">کد</label>
          <input
            type="text"
            className="form-control"
            disabled
            placeholder={coupon.code}
          />
        </div>

        <div className="col-md-3">
          <label className="form-label">درصد</label>
          <input
            type="text"
            className="form-control"
            disabled
            placeholder={coupon.percentage}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">تاریخ انقضا</label>
          <input
            type="text"
            className="form-control"
            disabled
            placeholder={coupon.expired_at}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">تاریخ ایجاد</label>
          <input
            type="text"
            className="form-control"
            disabled
            placeholder={coupon.created_at}
          />
        </div>
        <DeleteCoupon id={coupon.id} />
      </div>
    </>
  );
};

export default CouponPage;
