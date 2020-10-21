import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import IDeliverRepository from '../repositories/IDeliverRepository';

interface IRequest {
  id: string;
}
@injectable()
class DeleteDeliverService {
  constructor(
    @inject('DeliverRepository')
    private deliverRepository: IDeliverRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<any> {
    const deliver = await this.deliverRepository.findById(id);
    if (!deliver) {
      throw new AppError('User not exist.');
    }
    await this.deliverRepository.delete(id);
    return {};
  }
}

export default DeleteDeliverService;
