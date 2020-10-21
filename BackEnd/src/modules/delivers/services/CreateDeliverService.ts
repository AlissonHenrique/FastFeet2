import Deliver from '@modules/delivers/infra/typeorm/entities/Deliver';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import AppError from '@shared/errors/AppError';
import { parseISO, getHours } from 'date-fns';
import { injectable, inject } from 'tsyringe';
import IDeliverRepository from '../repositories/IDeliverRepository';

interface IRequest {
  product: string;
  adress: string;
  deliveryman_id: string;
  postal_code: number;
  neighborhood: string;
  city: string;
  state: string;
  start_date: Date;
}
@injectable()
class CreateDeliverService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('DeliverRepository')
    private deliverRepository: IDeliverRepository,
  ) {}

  public async execute({
    product,
    adress,
    deliveryman_id,
    postal_code,
    neighborhood,
    city,
    state,
    start_date,
  }: IRequest): Promise<Deliver> {
    // if (!(await this.userRepository.findByDeliverymanID(deliveryman_id))) {
    //   throw new AppError('Deliver not exixis.');
    // }

    const get = getHours(start_date);

    if (get < 8 || get > 24) {
      throw new AppError('Time not available');
    }
    const deliver = await this.deliverRepository.create({
      product,
      adress,
      deliveryman_id,
      postal_code,
      neighborhood,
      city,
      state,
      start_date,
    });

    return deliver;
  }
}

export default CreateDeliverService;
