import express, {Express} from 'express'
import {Server} from 'http'
import {UsersController} from "./users/users.controller";
import {ExceptionFilter} from "./errors/exception.filter";
import {ILogger} from "./service/logger.interface";
import {inject, injectable} from "inversify";
import {TYPES} from "./types";
import 'reflect-metadata'

@injectable()
export class App {
    app: Express
    server: Server
    port: number

    constructor(
        @inject(TYPES.ILogger) private logger: ILogger,
        @inject(TYPES.IUsersController) private usersController: UsersController,
        @inject(TYPES.ExceptionFilter) private exceptionFilter: ExceptionFilter
    ) {
        this.app = express()
        this.port = 8000
    }

    useRouter() {
        this.app.use('/users', this.usersController.router)
    }

    useExceptionFilter() {
        const handler = this.exceptionFilter.catch.bind(this.exceptionFilter)
        this.app.use(handler)
    }

    public async init() {
        this.useRouter()
        this.useExceptionFilter()
        this.server = this.app.listen(this.port)
        this.logger.log(`Server is set on http://localhost/${this.port}`)
    }
}

