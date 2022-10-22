import {BaseController} from "../common/base.controller";
import {Logger} from "../service/logger.service";
import {NextFunction, Request, Response} from "express";
import {HTTPError} from "../errors/http-error.class";

export class UsersController extends BaseController {
    constructor(logger: Logger) {
        super(logger);
        this.bindRoutes('users', [
            {path: '/login', method: 'post', callback: this.login},
            {path: '/register', method: 'post', callback: this.register}
        ])
    }

    login(req: Request, res: Response, next: NextFunction) {
        // this.ok(res, 'this is login page')
        next(new HTTPError(401, 'auth error', 'not good'))
    }

    register(req: Request, res: Response, next: NextFunction) {
        this.ok(res, 'this is login page')
    }
}
