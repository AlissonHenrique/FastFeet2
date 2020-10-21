import { container } from 'tsyringe';
import ListDeliverService from '@modules/delivers/services/ListDeliverService';
import { Request, Response } from 'express';

export default class ListController {
  public async index(request: Request, response: Response): Promise<Response> {
    const createDeliver = container.resolve(ListDeliverService);
    const deliver = await createDeliver.execute();
    return response.json(deliver);
  }
}
