"use server";

import { postFetch } from "@/utils/fetch";
import { handleError } from "@/utils/helper";
import { revalidatePath } from "next/cache";

const createUser = async (state, formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const cellphone = formData.get("cellphone");
  const password = formData.get("password");

  if (name === "") {
    return {
      status: "error",
      message: "فیلد نام کاربر الزامی است",
    };
  }
  if (email === "") {
    return {
      status: "error",
      message: "فیلد ایمیل کاربر الزامی است.",
    };
  }

  const pattern = /^(\+98|0)?9\d{9}$/i;
  if (cellphone === "" || !pattern.test(cellphone)) {
    return {
      status: "error",
      message: "فیلد شماره تماس کاربر نامعتبر است.",
    };
  }

  if (password === "") {
    return {
      status: "error",
      message: "فیلد رمز عبور کاربر الزامی است.",
    };
  }

  const data = await postFetch("/users", { name, email, cellphone, password });

  if (data.status === "success") {
    revalidatePath("/users");
    return {
      status: data.status,
      message: "کاربر مورد نظر ایجاد شد",
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
};

export { createUser };
