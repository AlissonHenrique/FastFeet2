import { container } from 'tsyringe';
import CreateDeliverService from '@modules/delivers/services/CreateDeliverService';

import { Request, Response } from 'express';

export default class DeliverController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      product,
      adress,
      deliveryman_id,
      postal_code,
      neighborhood,
      city,
      state,
    } = request.body;

    const createDeliver = container.resolve(CreateDeliverService);

    const deliver = await createDeliver.execute({
      product,
      adress,
      deliveryman_id,
      postal_code,
      neighborhood,
      city,
      state,
      start_date: new Date(),
    });
    return response.json(deliver);
  }
}
