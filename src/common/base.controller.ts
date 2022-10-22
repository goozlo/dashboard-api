import {Logger} from "../service/logger.service";
import {Response, Router} from "express";
import {IControllerRoute} from "./route.interface";


export class BaseController {
    private readonly _router: Router

    constructor(private logger: Logger) {
        this._router = Router()
    }

    get router() {
        return this._router
    }

    public send<T>(res: Response, code: number, message: T) {
        res.type('application/json')
        return res.status(code).json(message)
    }

    public ok<T>(res: Response, message: T) {
        return this.send<T>(res, 200, message)
    }


    protected bindRoutes(path: string, routes: IControllerRoute[]) {
        for (const route of routes) {
            this.logger.log(`[${route.method}] ${path}${route.path}`)
            const handler = route.callback.bind(this)
            this._router[route.method](route.path, handler)
        }
    }
}
