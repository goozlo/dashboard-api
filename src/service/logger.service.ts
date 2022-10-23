import {Logger as TSLog} from 'tslog'
import {ILogger} from "./logger.interface";
import {injectable} from "inversify";
import 'reflect-metadata'

@injectable()
export class Logger implements ILogger {
    private logger: TSLog

    constructor() {
        this.logger = new TSLog({
            displayLoggerName: false,
            displayFilePath: 'hidden',
            displayFunctionName: false
        })
    }

     log(...args: unknown[]) {
        this.logger.info(...args)
    }

    error(...args: unknown[]) {
        this.logger.error(...args)
    }

    warn(...args: unknown[]) {
        this.logger.warn(...args)
    }
}

