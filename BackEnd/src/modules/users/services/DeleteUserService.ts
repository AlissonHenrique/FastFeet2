import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import IUserRepository from '../repositories/IUserRepository';

interface IRequest {
  id: string;
}
@injectable()
class DeleteUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<any> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new AppError('User not exist.');
    }
    await this.userRepository.delete(id);
    return {};
  }
}

export default DeleteUserService;
