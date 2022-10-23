import {App} from './app'
import {Logger} from "./service/logger.service";
import {UsersController} from "./users/users.controller";
import {ExceptionFilter} from "./errors/exception.filter";
import {Container, ContainerModule, interfaces} from "inversify";
import {ILogger} from "./service/logger.interface";
import {IExceptionFilter} from "./errors/exception.filter.interface";
import {TYPES} from "./types";
import {IUsersController} from "./users/users.controller.interface";

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
    bind<ILogger>(TYPES.ILogger).to(Logger)
    bind<IExceptionFilter>(TYPES.ExceptionFilter).to(ExceptionFilter)
    bind<IUsersController>(TYPES.IUsersController).to(UsersController)
    bind<App>(TYPES.Application).to(App)
})

function bootstrap() {
    const appContainer = new Container()
    appContainer.load(appBindings)
    const app = appContainer.get<App>(TYPES.Application)
    app.init()
    return {appContainer, app}
}

export const {appContainer, app} = bootstrap()
