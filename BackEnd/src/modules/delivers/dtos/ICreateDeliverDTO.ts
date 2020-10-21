export default interface ICreateDeliverDTO {
  product: string;
  adress: string;
  deliveryman_id: string;
  postal_code: number;
  neighborhood: string;
  city: string;
  state: string;
  canceled_at?: Date;
  start_date: Date;
  end_date?: Date;
}
