import { UserRegisterDto } from './dto/user-register.dto';
import { UserModel } from '@prisma/client';

export interface IUserService {
	create: (dto: UserRegisterDto) => Promise<UserModel | null>;
	validateUser: (dto: UserRegisterDto) => Promise<boolean>;
	getUserInfo: (email: string) => Promise<UserModel | null>;
}
