import { inject, injectable } from 'inversify';
import { PrismaClient, UserModel } from '@prisma/client';
import { TYPES } from '../types';
import { ILogger } from '../service/logger.interface';

@injectable()
export class PrismaService {
	client: PrismaClient;

	constructor(@inject(TYPES.Logger) private logger: ILogger) {
		this.client = new PrismaClient();
	}

	async connect(): Promise<void> {
		try {
			this.logger.log('[PrismaService] successful connected to db');
			await this.client.$connect();
		} catch (e) {
			if (e instanceof Error) {
				this.logger.error('[PrismaService] Error connection to db: ' + e.message);
			}
		}
	}

	async disconnect(): Promise<void> {
		await this.client.$connect();
	}
}
