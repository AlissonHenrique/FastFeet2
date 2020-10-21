import { container } from 'tsyringe';
import '@modules/users/providers';
// import './providers';

import IUserRepository from '@modules/users/repositories/IUserRepository';
import UserRepository from '@modules/users/infra/typeorm/repositories/UserRepository';
import IDeliverRepository from '@modules/delivers/repositories/IDeliverRepository';
import DeliverRepository from '@modules/delivers/infra/typeorm/repositories/DeliverRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<IDeliverRepository>(
  'DeliverRepository',
  DeliverRepository,
);
