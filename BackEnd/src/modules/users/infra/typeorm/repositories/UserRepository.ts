import { getRepository, Repository, Not } from 'typeorm';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '../entities/User';

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findByCPF(cpf: number): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { cpf },
    });
    return user;
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = this.ormRepository.findOne(id);
    return user;
  }

  public async findAllUser(): Promise<User[]> {
    const user = this.ormRepository.find();
    return user;
  }

  public async create({
    name,
    email,
    password,
    cpf,
    deliveryman,
  }: ICreateUserDTO): Promise<User> {
    const user = await this.ormRepository.create({
      name,
      email,
      password,
      cpf,
      deliveryman,
    });
    await this.ormRepository.save(user);
    return user;
  }

  public async update(data: ICreateUserDTO): Promise<User> {
    return this.ormRepository.save(data);
  }

  public async delete(id: string): Promise<any> {
    return this.ormRepository.delete(id);
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }
}

export default UserRepository;
