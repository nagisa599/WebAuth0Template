<<<<<<< HEAD
import { getAccessToken } from "@auth0/nextjs-auth0";
import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";

export default withMiddlewareAuthRequired();
console.log("Hello, world!");
const test = async () => {
  // try {
  //   const { accessToken } = await getAccessToken();
  //   if (accessToken) {
  //     console.log(accessToken);
  //   } else {
  //     console.log("Access token not found");
  //   }
  // } catch (error) {
  //   console.error("Failed to get access token:", error);
  // }
};

test();
=======
import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";

export default withMiddlewareAuthRequired();
>>>>>>> 30e85c345dc301052442a9b4e75b4990a2a1da14

export const config = {
  matcher: ["/profile", "/protect"],
};
