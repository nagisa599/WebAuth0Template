import { getAccessToken } from "@auth0/nextjs-auth0";
import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";

export default withMiddlewareAuthRequired();

export const config = {
  matcher: ["/profile", "/protect"],
};
