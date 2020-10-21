import UpdateDeliverService from '@modules/delivers/services/UpdateDeliverService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class UpdateController {
  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
      product,
      adress,
      deliveryman_id,
      postal_code,
      neighborhood,
      city,
      state,
      canceled_at,
      start_date,
      end_date,
    } = request.body;

    const updaeDeliver = container.resolve(UpdateDeliverService);

    const deliver = await updaeDeliver.execute({
      id,
      product,
      adress,
      deliveryman_id,
      postal_code,
      neighborhood,
      city,
      state,
      canceled_at,
      start_date,
      end_date,
    });
    return response.json(deliver);
  }
}
