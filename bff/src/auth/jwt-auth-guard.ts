import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import * as jwksClient from 'jwks-rsa';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class AuthGuard implements CanActivate {
  private client = jwksClient({
    jwksUri: `${process.env.AUTH0_ISSUER_URL}/.well-known/jwks.json`,
  });

  canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = context.getArgs()[2]; // GraphQL context
    const request = ctx.req; // Direct access to GraphQL request object
    const authHeader = request.headers.authorization;
    if (!authHeader) throw new UnauthorizedException('No token provided');

    const token = authHeader.split(' ')[1];
    console.log('token', token);
    return this.validateToken(token).then((decoded) => {
      // Here you can use the user ID from decoded JWT
      const userId = decoded.sub;
      console.log('User ID:', userId);
      // You can attach the user ID to the request object if needed
      request.user = { userId };
      return true;
    });
  }

  private async validateToken(token: string): Promise<any> {
    const decoded: any = jwt.decode(token, { complete: true });
    console.log('decoded', decoded);
    if (!decoded) throw new UnauthorizedException('Invalid token');
    const kid = decoded.header.kid;
    console.log('kid', kid);
    console.log('env', process.env.AUTH0_ISSUER_URL);
    const key = await this.client.getSigningKey(kid);
    const signingKey = key.getPublicKey();
    console.log('signiture', signingKey);
    try {
      jwt.verify(token, signingKey, {
        algorithms: ['RS256'],
        audience: process.env.AUTH0_AUDIENCE,
        issuer: `${process.env.AUTH0_ISSUER_URL}/`,
      });
      console.log('test');
      console.log(decoded.payload);
      return decoded.payload; // Return the decoded payload
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
