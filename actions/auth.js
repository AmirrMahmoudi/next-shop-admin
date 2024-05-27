"use server";

import { postFetch, postFetchUnauth } from "@/utils/fetch";
import { handleError } from "@/utils/helper";
import { cookies } from "next/headers";

async function login(state, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (email === "" || password === "") {
    return {
      status: "error",
      message: "ایمیل و رمز عبور الزامی است",
    };
  }

  const data = await postFetchUnauth("/auth/login", { email, password });

  if (data.status === "success") {
    cookies().set({
      name: "token",
      value: data.data.token,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    return {
      status: data.status,
      message: "شما وارد سیستم شدید",
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}

async function me() {
  const token = cookies().get("token");

  if (!token) {
    return {
      error: "Not Authorized",
    };
  }

  const data = await postFetch("/auth/me");

  if (data.status === "success") {
    return {
      user: data.data,
    };
  } else {
    return {
      error: "User Forbidden",
    };
  }
}

export { login, me };
