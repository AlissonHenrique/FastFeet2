import DeliverEndDateService from '@modules/delivers/services/DeliverEndDateService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class DeliveryEndDateController {
  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const updateDeliver = container.resolve(DeliverEndDateService);

    const deliver = await updateDeliver.execute({
      id,
      end_date: new Date(),
    });
    return response.json(deliver);
  }
}
