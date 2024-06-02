"use client";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import SubmitButton from "@/components/SubmitButton";
import { createUser } from "@/actions/users";
import Image from "next/image";

const CreateProduct = ({ categories }) => {
  const [state, formAction] = useFormState(createUser, {});
  const router = useRouter();
  const [image, setImage] = useState(null);
  const primaryImageRef = useRef();

  useEffect(() => {
    toast(state?.message, { type: `${state?.status}` });
    if (state?.status === "success") {
      router.push("/users");
    }
  }, [state]);

  const setPrimaryImage = (e) => {
    // console.log(e.target.files[0]);
    const file = e.target.files[0];

    const render = new FileReader();
    render.readAsDataURL(file);

    render.onloadend = () => {
      setImage(render.result.toString());
    };
  };
  return (
    <form action={formAction} className="row gy-4">
      <div className="col-md-12 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <label className="form-label">تصویر اصلی</label>

            <div className={image ? "position-relative" : "d-none"}>
              {image && (
                <>
                  <Image
                    className="rounded"
                    src={image}
                    alt="image"
                    width={350}
                    height={220}
                  />
                  <div
                    className="position-absolute top-0"
                    onClick={() => {
                      primaryImageRef.current.value = null;
                      setImage(null);
                    }}
                  >
                    <i className="bi bi-x text-danger fs-2 cursor-pointer"></i>
                  </div>
                </>
              )}
            </div>
            <input
              onChange={setPrimaryImage}
              ref={primaryImageRef}
              type="file"
              name="primary-image"
              className={image === null ? "form-control" : "d-none"}
            />
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <label className="form-label">تصاویر</label>
        <input multiple type="file" name="images[]" className="form-control" />
      </div>

      <div className="col-md-3">
        <label className="form-label">نام</label>
        <input type="text" name="name" className="form-control" />
      </div>

      <div className="col-md-3">
        <label className="form-label">دسته بندی</label>
        <select name="category_id" defaultValue="" className="form-select">
          <option value="" disabled>
            انتخاب دسته بندی
          </option>
          {categories.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="col-md-3">
        <label className="form-label">وضعیت</label>
        <select name="status" defaultValue={"1"} className="form-select">
          <option value="1">فعال</option>
          <option value="0">غیر فعال</option>
        </select>
      </div>
      <div className="col-md-3">
        <label className="form-label">قیمت</label>
        <input type="price" name="name" className="form-control" />
      </div>
      <div className="col-md-3">
        <label className="form-label">تعداد</label>
        <input type="quantity" name="name" className="form-control" />
      </div>

      <div className="col-md-3">
        <label className="form-label">قیمت حراجی</label>
        <input type="sale_price" name="name" className="form-control" />
      </div>

      <div>
        <SubmitButton title={"ایجاد محصول"} style="btn btn-outline-dark mt-3" />
      </div>
    </form>
  );
};

export default CreateProduct;
