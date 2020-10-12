/// REGRAS DE NEGOCIO DA APLICAÇÃO
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import User from '../infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUserRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface IRequest {
  name: string;
  email: string;
  password: string;
  cpf: string;
  deliveryman: boolean;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    name,
    email,
    password,
    cpf,
    deliveryman,
  }: IRequest): Promise<User> {
    if (await this.userRepository.findByCPF(cpf)) {
      throw new AppError('Email address already used.');
    }

    const hash_password = await this.hashProvider.generateHash(password);

    const user = await this.userRepository.create({
      name,
      email,
      password: hash_password,
      cpf,
      deliveryman,
    });

    return user;
  }
}
export default CreateUserService;
