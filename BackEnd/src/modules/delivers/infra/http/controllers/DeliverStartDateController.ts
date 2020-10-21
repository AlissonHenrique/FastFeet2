import DeliverStartDateService from '@modules/delivers/services/DeliverStartDateService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class DeliveryStartDateController {
  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const updateDeliver = container.resolve(DeliverStartDateService);

    const deliver = await updateDeliver.execute({
      id,
      start_date: new Date(),
    });
    return response.json(deliver);
  }
}
