import { NextFunction, Request, Response } from 'express';
import { IMiddleware } from './middleware.interface';

export class AuthGuardMiddleware implements IMiddleware {
	execute({ user }: Request, res: Response, next: NextFunction): void {
		if (user) {
			return next();
		}
		res.status(401).send({ error: 'You are not authorized' });
	}
}
