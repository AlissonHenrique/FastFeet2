import ICreateDeliverDTO from '../dtos/ICreateDeliverDTO';
import Deliver from '../infra/typeorm/entities/Deliver';

export default interface IDeliverRepository {
  create(data: ICreateDeliverDTO): Promise<Deliver>;
  update(data: ICreateDeliverDTO): Promise<Deliver>;
  save(deliveri: Deliver): Promise<Deliver>;
  findAll(): Promise<Deliver[]>;
  delete(id: string): Promise<Deliver | undefined>;
  findById(id: string): Promise<Deliver | undefined>;
  updateDeliveryDate(id: string, end_date: Date): Promise<Deliver>;
  findbyDeliverToUserRelations(id: string): Promise<Deliver[]>;
}
