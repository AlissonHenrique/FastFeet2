import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../infra/typeorm/entities/User';

export default interface IUserRepository {
  findById(id: string): Promise<User | undefined>;
  findByCPF(cpf: number): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
  findAllUser(): Promise<User[]>;
  update(data: ICreateUserDTO): Promise<User>;
  delete(id: string): Promise<User | undefined>;
}
