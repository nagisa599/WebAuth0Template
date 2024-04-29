"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";
<<<<<<< HEAD
import { useGetTodosQuery } from "../../../graphql/dist/graphql";
import { getAccessToken } from "@auth0/nextjs-auth0";
import { error } from "console";

const Page = () => {
  const [result] = useGetTodosQuery();
  console.log("result: ", result.data);
  console.log("error", result.error);

=======

const Page = () => {
>>>>>>> 30e85c345dc301052442a9b4e75b4990a2a1da14
  const { user } = useUser();
  return (
    <div>
      <div>これはログイン後のページだよ</div>
      <div>ユーザー名: {user?.name}</div>
    </div>
  );
};

export default Page;
