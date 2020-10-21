import Deliver from '@modules/delivers/infra/typeorm/entities/Deliver';
import ICreateDeliverDTO from '@modules/delivers/dtos/ICreateDeliverDTO';
import IDeliverRepository from '@modules/delivers/repositories/IDeliverRepository';
import { getRepository, Repository } from 'typeorm';

class DeliverRepository implements IDeliverRepository {
  private ormRepository: Repository<Deliver>;

  constructor() {
    this.ormRepository = getRepository(Deliver);
  }

  public async findById(id: string): Promise<Deliver | undefined> {
    const deliver = this.ormRepository.findOne(id);
    return deliver;
  }

  public async findbyDeliverToUserRelations(id: string): Promise<Deliver[]> {
    const user = this.ormRepository.find({
      relations: ['user'],
      where: [
        {
          deliveryman_id: id,
          canceled_at: null,
          end_date: null,
        },
      ],
    });

    return user;
  }

  public async findAll(): Promise<Deliver[]> {
    const deliver = await this.ormRepository.find();
    return deliver;
  }

  public async create(data: ICreateDeliverDTO): Promise<Deliver> {
    const deliveri = this.ormRepository.create(data);
    await this.ormRepository.save(deliveri);
    return deliveri;
  }

  public async update(data: ICreateDeliverDTO): Promise<Deliver> {
    return this.ormRepository.save(data);
  }

  public async updateDeliveryDate(id: string, date: Date): Promise<Deliver> {
    return this.ormRepository.save({ id, date });
  }

  public async delete(id: string): Promise<any> {
    return this.ormRepository.delete(id);
  }

  public async save(deliver: Deliver): Promise<Deliver> {
    return this.ormRepository.save(deliver);
  }
}
export default DeliverRepository;
