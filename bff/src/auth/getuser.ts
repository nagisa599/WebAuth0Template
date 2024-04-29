import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = context.getArgs()[2]; // GraphQLの実行コンテキスト
    console.log(ctx);
    return ctx.req.user; // `AuthGuard`でセットされたuserオブジェクト
  },
);
