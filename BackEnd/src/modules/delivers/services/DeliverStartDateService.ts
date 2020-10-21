import { inject, injectable } from 'tsyringe';
import Deliver from '../infra/typeorm/entities/Deliver';
import IDeliverRepository from '../repositories/IDeliverRepository';

interface IRequest {
  id: string;
  start_date: Date;
}
@injectable()
class DeliverStartDateService {
  constructor(
    @inject('DeliverRepository')
    private deliverRepository: IDeliverRepository,
  ) {}

  public async execute({ id, start_date }: IRequest): Promise<Deliver> {
    const update = await this.deliverRepository.updateDeliveryDate(
      id,
      start_date,
    );
    return update;
  }
}

export default DeliverStartDateService;
