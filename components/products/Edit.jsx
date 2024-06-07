"use client";

import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import gregorian from "react-date-object/calendars/gregorian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian_en from "react-date-object/locales/gregorian_en";

import { toast } from "react-toastify";

import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import Image from "next/image";
import { useRouter } from "next/navigation";

import SubmitButton from "@/components/SubmitButton";
import { createProduct } from "@/actions/products";
import { getBlurDataURL } from "@/utils/helper";

const EditProduct = ({ product, categories }) => {
  const [state, formAction] = useFormState(createProduct, {});
  const router = useRouter();
  const [image, setImage] = useState(null);
  const primaryImageRef = useRef();
  const [dateOnSale, setDateOnSale] = useState([]);

  useEffect(() => {
    if (product.is_sale) {
      setDateOnSale([
        {
          persian: product.date_on_sale_from,
          gregorian: product.date_on_sale_from_gregorian,
        },
        {
          persian: product.date_on_sale_to,
          gregorian: product.date_on_sale_to_gregorian,
        },
      ]);
    }

    toast(state?.message, { type: `${state?.status}` });
    if (state?.status === "success") {
      router.push("/products");
    }
  }, [state]);

  function setPrimaryImage(e) {
    const file = e.target.files[0];

    const render = new FileReader();
    render.readAsDataURL(file);

    render.onloadend = () => {
      setImage(render.result.toString());
    };
  }

  function changeDateOnSale(value) {
    if (value.length == 2) {
      setDateOnSale([
        {
          persian: value[0],
          gregorian: value[0]
            .convert(gregorian, gregorian_en)
            .format("YYYY-MM-DD HH:mm:ss"),
        },
        {
          persian: value[1],
          gregorian: value[1]
            .convert(gregorian, gregorian_en)
            .format("YYYY-MM-DD HH:mm:ss"),
        },
      ]);
    }
  }

  return (
    <form action={formAction} className="row gy-4">
      <div className="col-md-12 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <label className="form-label">تصویر اصلی</label>

            <div className={image ? "position-relative" : "d-none"}>
              <img
                className="rounded"
                src={image}
                width={350}
                height={220}
                alt="image"
              />
              <div
                className="position-absolute"
                onClick={() => {
                  primaryImageRef.current.value = "";
                  setImage(null);
                }}
                style={{ top: "5px", right: "15px" }}
              >
                <i className="bi bi-x text-danger fs-2 cursor-pointer"></i>
              </div>
            </div>

            <div className={image === null ? "" : "d-none"}>
              <Image
                className="rounded mb-4"
                src={product.primary_image}
                placeholder="blur"
                blurDataURL={getBlurDataURL()}
                width={350}
                height={220}
                alt="product-image"
              />
              <input
                onChange={setPrimaryImage}
                name="primary_image"
                type="file"
                ref={primaryImageRef}
                className="form-control"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <label className="form-label">تصاویر</label>
        <input multiple name="images[]" type="file" className="form-control" />
      </div>

      <div className="col-md-3">
        <label className="form-label">نام</label>
        <input
          name="name"
          defaultValue={product.name}
          type="text"
          className="form-control"
        />
      </div>

      <div className="col-md-3">
        <label className="form-label">دسته بندی</label>
        <select
          name="category_id"
          defaultValue={product.category_id}
          className="form-select"
        >
          {categories.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="col-md-3">
        <label className="form-label">وضعیت</label>
        <select
          name="status"
          defaultValue={product.status_value}
          className="form-select"
        >
          <option value="1">فعال</option>
          <option value="0">غیر فعال</option>
        </select>
      </div>

      <div className="col-md-3">
        <label className="form-label">قیمت</label>
        <input
          name="price"
          defaultValue={product.price}
          type="text"
          className="form-control"
        />
      </div>

      <div className="col-md-3">
        <label className="form-label">تعداد</label>
        <input
          name="quantity"
          defaultValue={product.quantity}
          type="text"
          className="form-control"
        />
      </div>

      <div className="col-md-3">
        <label className="form-label">قیمت حراجی</label>
        <input
          name="sale_price"
          defaultValue={product.sale_price}
          type="text"
          className="form-control"
        />
      </div>

      <div className="col-md-3">
        <label className="form-label">تاریخ شروع و پایان حراجی</label>
        <DatePicker
          inputClass="form-control"
          range
          value={dateOnSale.map((time) => time.persian)}
          calendar={persian}
          locale={persian_fa}
          onChange={changeDateOnSale}
          format="YYYY-MM-DD HH:mm:ss"
          plugins={[
            <TimePicker position="bottom" />,
            <DatePanel markFocused />,
          ]}
        />

        <input
          name="date_on_sale_from"
          value={dateOnSale.length > 0 && dateOnSale[0].gregorian}
          type="hidden"
        />
        <input
          name="date_on_sale_to"
          value={dateOnSale.length > 0 && dateOnSale[1].gregorian}
          type="hidden"
        />
      </div>

      <div className="col-md-12">
        <label className="form-label">توضیحات</label>
        <textarea
          rows="5"
          defaultValue={product.description}
          name="description"
          className="form-control"
        ></textarea>
      </div>

      <div>
        <SubmitButton
          title="ایجاد محصول"
          style="btn btn-outline-dark mt-3 mb-5"
        />
      </div>
    </form>
  );
};

export default EditProduct;
