import { Request, Response } from 'express';

import { container } from 'tsyringe';
import ShowUserService from '@modules/users/services/ShowUserService';

export default class ShowUserController {
  public async index(request: Request, response: Response): Promise<Response> {
    const findUser = container.resolve(ShowUserService);
    const user = await findUser.execute();
    return response.json(user);
  }
}
