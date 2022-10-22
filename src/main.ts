import {App} from './app'
import {Logger} from "./service/logger.service";
import {UsersController} from "./users/users.controller";
import {ExceptionFilter} from "./errors/exceptionFilter";

async function bootstrap() {
    const logger = new Logger()
    const app = new App(
        logger,
        new UsersController(logger),
        new ExceptionFilter(logger))
    await app.init()
}

bootstrap()
