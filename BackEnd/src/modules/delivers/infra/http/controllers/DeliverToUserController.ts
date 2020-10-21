import DeliverToUserService from '@modules/delivers/services/DeliverToUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class DeliverToUserController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showUser = container.resolve(DeliverToUserService);
    const user = await showUser.execute({
      id,
    });
    return response.json(user);
  }
}
