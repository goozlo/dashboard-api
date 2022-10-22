import express, {Express} from 'express'
import {Server} from 'http'
import {Logger} from "./service/logger.service";
import {UsersController} from "./users/users.controller";
import {ExceptionFilter} from "./errors/exceptionFilter";

export class App {
    app: Express
    server: Server
    port: number
    logger: Logger
    usersController: UsersController
    exceptionFilter: ExceptionFilter

    constructor(
        logger: Logger,
        usersController: UsersController,
        exceptionFilter: ExceptionFilter
    ) {
        this.app = express()
        this.port = 8000
        this.logger = logger
        this.usersController = usersController
        this.exceptionFilter = exceptionFilter
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

