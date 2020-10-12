import { container } from 'tsyringe';
import '@modules/users/providers';
// import './providers';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import UserRepository from '@modules/users/infra/typeorm/repositories/UserRepository';
// import IUsersTokenRepository from '@modules/users/repositories/IUserTokenRepository';

// import UsersTokenRepository from '@modules/users/infra/typeorm/repositories/UsersTokenRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

// container.registerSingleton<IUsersTokenRepository>(
//   'UsersTokenRepository',
//   UsersTokenRepository,
// );
