import { inject, injectable } from 'tsyringe';
import IDeliverRepository from '../repositories/IDeliverRepository';

@injectable()
class ListDeliverService {
  constructor(
    @inject('DeliverRepository')
    private deliverRepository: IDeliverRepository,
  ) {}

  public async execute() {
    const deliveres = await this.deliverRepository.findAll();
    return deliveres;
  }
}

export default ListDeliverService;
