import DeliverDateService from '@modules/delivers/services/DeliverDateService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class UpdateController {
  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const updaeDeliver = container.resolve(DeliverDateService);

    const deliver = await updaeDeliver.execute({
      id,
      end_date: new Date(),
    });
    return response.json(deliver);
  }
}
