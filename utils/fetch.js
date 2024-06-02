import { cookies } from "next/headers";

const getFetch = async (url) => {
  const token = cookies().get("token");
  const res = await fetch(`${process.env.API_URL}${url}`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token.value}`,
    },
  });

  if (res.ok) {
    const data = await res.json();
    return data.data;
  } else {
    throw new Error(`مشکل در دریافت اطلاعات کد : ${res.status}`);
  }
};

const postFetch = async (url, body) => {
  const token = cookies().get("token");
  const res = await fetch(`${process.env.API_URL}${url}`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token.value}`,
    },
    body: JSON.stringify(body),
  });

  return await res.json();
};

const postFetchUnauth = async (url, body) => {
  const res = await fetch(`${process.env.API_URL}${url}`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  return await res.json();
};

const deleteFetch = async (url) => {
  const token = cookies().get("token");
  const res = await fetch(`${process.env.API_URL}${url}`, {
    cache: "no-store",
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token.value}`,
    },
  });

  return await res.json();
};

const putFetch = async (url, body) => {
  const token = cookies().get("token");
  const res = await fetch(`${process.env.API_URL}${url}`, {
    cache: "no-store",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token.value}`,
    },
    body: JSON.stringify(body),
  });

  return await res.json();
};

export { getFetch, postFetch, postFetchUnauth, deleteFetch, putFetch };
