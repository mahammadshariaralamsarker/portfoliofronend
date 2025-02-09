"use server";

import { FormValues } from "@/app/login/page";



export const loginUser = async (data:FormValues) => {
  const res = await fetch(`${process.env.backendUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userinfo = await res.json();
  return userinfo;
};
