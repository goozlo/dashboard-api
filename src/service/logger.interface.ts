import { Logger as TSLog } from 'tslog/dist/types/Logger';

export interface ILogger {
	logger: TSLog;
	log: (...args: unknown[]) => void;
	error: (...args: unknown[]) => void;
	warn: (...args: unknown[]) => void;
}
