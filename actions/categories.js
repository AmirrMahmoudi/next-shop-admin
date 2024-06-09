"use server";

import { deleteFetch, postFetch, putFetch } from "@/utils/fetch";
import { handleError } from "@/utils/helper";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const createCategory = async (state, formData) => {
  const name = formData.get("name");
  const description = formData.get("description");

  if (name === "") {
    return {
      status: "error",
      message: "فیلد نام کاربر الزامی است",
    };
  }
  if (description === "") {
    return {
      status: "error",
      message: "فیلد توضیحات کاربر الزامی است.",
    };
  }

  const data = await postFetch("/categories", { name, description });

  if (data.status === "success") {
    revalidatePath("/categories");
    return {
      status: data.status,
      message: "دسته بندی مورد نظر ایجاد شد",
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
};

const deleteCategory = async (state, formData) => {
  const id = formData.get("id");
  if (id === "" || id == null) {
    return {
      status: "error",
      message: "شناسه دسته بندی الزامی است.",
    };
  }

  const data = await deleteFetch(`/categories/${id}`, {});

  if (data.status === "success") {
    revalidatePath("/categories");
    redirect("/categories");
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
};

const editCategory = async (state, formData) => {
  const id = formData.get("id");
  const name = formData.get("name");
  const description = formData.get("description");

  if (id === "" || id == null) {
    return {
      status: "error",
      message: "شناسه دسته بندی الزامی است.",
    };
  }

  if (name === "") {
    return {
      status: "error",
      message: "فیلد نام دسته بندی الزامی است.",
    };
  }

  if (description === "") {
    return {
      status: "error",
      message: "فیلد توضیحات کاربر الزامی است.",
    };
  }

  const data = await putFetch(`/categories/${id}`, {
    name,
    description,
  });

  if (data.status === "success") {
    revalidatePath("/categories");
    return {
      status: data.status,
      message: "دسته بندی مورد نظر ویرایش شد.",
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
};

export { createCategory, deleteCategory, editCategory };
