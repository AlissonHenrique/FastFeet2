import { getRepository, Repository, Not } from 'typeorm';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '../entities/User';

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findByCPF(cpf: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { cpf },
    });
    return user;
  }

  public async create({
    name,
    email,
    password,
    cpf,
    deliveryman,
  }: ICreateUserDTO): Promise<User> {
    const appointments = this.ormRepository.create({
      name,
      email,
      password,
      deliveryman,
      cpf,
    });
    await this.ormRepository.save(appointments);
    return appointments;
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }
}

export default UserRepository;
