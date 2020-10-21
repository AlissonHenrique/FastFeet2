import { inject, injectable } from 'tsyringe';
import Deliver from '../infra/typeorm/entities/Deliver';
import IDeliverRepository from '../repositories/IDeliverRepository';

interface IRequest {
  id: string;
}
@injectable()
class DeliverToUserService {
  constructor(
    @inject('DeliverRepository')
    private deliverRepository: IDeliverRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Deliver[]> {
    const deliver = await this.deliverRepository.findbyDeliverToUserRelations(
      id,
    );
    return deliver;
  }
}

export default DeliverToUserService;
