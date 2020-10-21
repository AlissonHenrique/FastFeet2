import { inject, injectable } from 'tsyringe';
import IUserRepository from '../repositories/IUserRepository';

interface IRequest {
  id: string;
  name: string;
  email: string;
  password: string;
  cpf: number;
  deliveryman: boolean;
}
@injectable()
class UpdateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute(data: IRequest) {
    const update = await this.userRepository.update(data);
    return update;
  }
}

export default UpdateUserService;
