import { inject, injectable } from 'tsyringe';
import Deliver from '../infra/typeorm/entities/Deliver';
import IDeliverRepository from '../repositories/IDeliverRepository';

interface IRequest {
  id: string;
  end_date: Date;
}
@injectable()
class DeliverDateService {
  constructor(
    @inject('DeliverRepository')
    private deliverRepository: IDeliverRepository,
  ) {}

  public async execute({ id, end_date }: IRequest): Promise<Deliver> {
    const update = await this.deliverRepository.updateDeliveryDate(
      id,
      end_date,
    );
    return update;
  }
}

export default DeliverDateService;
