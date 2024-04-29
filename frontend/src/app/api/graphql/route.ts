import { getAccessToken } from "@auth0/nextjs-auth0";
import { NextRequest, NextResponse } from "next/server";
import fetch from "node-fetch";
export async function POST(request: NextRequest) {
  const res = new NextResponse();
  // // 正しい型のオプションを渡してトークンを取得
  // const accessTokenOptions = {

  // };
  const { accessToken } = await getAccessToken(request, res);
  console.log("accessToken: ", accessToken);
  // const { accessToken } = await getAccessToken(differentAudienceOptions);
  const requestBody = await request.text(); // ReadableStream をテキストに変換

  const { query, variables } = JSON.parse(requestBody) as {
    query: string;
    variables?: any;
  };
  console.log("query: ", query);

  const graphqlResponse = await fetch("http://localhost:3001/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`, // Bearerトークンとしてアクセストークンを設定
    },
    body: JSON.stringify({ query, variables }), // リクエストボディを正しくフォーマット
  });
  console.log("test");
  const responseBody = await graphqlResponse.text();
  console.log(graphqlResponse.statusText);
  // 新しい Response オブジェクトを作成して返す
  return new Response(responseBody, {
    status: graphqlResponse.status,
    statusText: graphqlResponse.statusText,
  });
}
