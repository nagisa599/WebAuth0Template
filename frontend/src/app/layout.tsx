"use client";
import React, { PropsWithChildren } from "react";
import { PageLayout } from "@/components/PageLayout";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { useMemo } from "react";
import {
  UrqlProvider,
  ssrExchange,
  cacheExchange,
  fetchExchange,
  createClient,
} from "@urql/next";
import { ApolloWrapper } from "@/provider/WithApollo";

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  // const [client, ssr] = useMemo(() => {
  //   const ssr = ssrExchange({
  //     isClient: typeof window !== "undefined",
  //   });
  //   console.log("これはどっちで");
  //   const client = createClient({
  //     url: "https://trygql.formidable.dev/graphql/web-collections",
  //     exchanges: [cacheExchange, ssr, fetchExchange],
  //     suspense: true,
  //   });

  //   return [client, ssr];
  // }, []);
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <ApolloWrapper>
            {/* <UrqlProvider client={client} ssr={ssr}> */}
            <PageLayout>{children}</PageLayout>
            {/* </UrqlProvider> */}
          </ApolloWrapper>
        </UserProvider>
      </body>
    </html>
  );
};

export default RootLayout;
