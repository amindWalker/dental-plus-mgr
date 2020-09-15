import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  //Validate JWT Token
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('JWT token is missing.');
  }

  //Split the [type] and [token] from JWT token
  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub } = decoded as TokenPayload;
    //@ts-ignore
    request.user = { id: sub };

    return next();
  } catch {
    throw new Error('The token JWT is invalid');
  }
}
