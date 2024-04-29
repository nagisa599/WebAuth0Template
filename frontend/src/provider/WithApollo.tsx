"use client";
import { createClient, cacheExchange, fetchExchange, Provider } from "urql";

const client = createClient({
  url: "api/graphql", // your GraphQL endpoin
  suspense: true,
  fetchOptions: {
    credentials: "include", // クッキーを使用する場合
  },
  exchanges: [cacheExchange, fetchExchange],
});

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <Provider value={client}>{children}</Provider>;
}
