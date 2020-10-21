import DeleteUserService from '@modules/users/services/DeleteUserService';
import { container } from 'tsyringe';
import { Request, Response } from 'express';

export default class DeleteController {
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const userFind = container.resolve(DeleteUserService);
    const user = await userFind.execute({ id });

    return response.json(user);
  }
}
