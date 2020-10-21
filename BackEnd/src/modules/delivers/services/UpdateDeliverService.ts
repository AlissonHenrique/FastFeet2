import { inject, injectable } from 'tsyringe';
import IDeliverRepository from '../repositories/IDeliverRepository';

interface IRequest {
  id: string;
  product: string;
  adress: string;
  deliveryman_id: string;
  postal_code: number;
  neighborhood: string;
  city: string;
  state: string;
  canceled_at: Date;
  start_date: Date;
  end_date: Date;
}
@injectable()
class UpdateDeliverService {
  constructor(
    @inject('DeliverRepository')
    private deliverRepository: IDeliverRepository,
  ) {}

  public async execute(data: IRequest) {
    // valida  id
    const update = await this.deliverRepository.update(data);
    return update;
  }
}

export default UpdateDeliverService;
