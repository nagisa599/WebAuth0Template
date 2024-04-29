import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
  login: handleLogin({
    returnTo: "/profile",
<<<<<<< HEAD
    authorizationParams: {
      audience: "http://localhost:3001",
      scope: "openid profile email", // 例として scope を追加
    },
=======
>>>>>>> 30e85c345dc301052442a9b4e75b4990a2a1da14
  }),
  signup: handleLogin({
    authorizationParams: {
      screen_hint: "signup",
    },
    returnTo: "/profile",
  }),
});
