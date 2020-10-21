import DeleteDeliverService from '@modules/delivers/services/DeleteDeliverService';
import { container } from 'tsyringe';
import { Request, Response } from 'express';

export default class DeleteDeliverController {
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deliverFind = container.resolve(DeleteDeliverService);
    const deliver = await deliverFind.execute({ id });

    return response.json(deliver);
  }
}
