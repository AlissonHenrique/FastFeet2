import UpdateUserService from '@modules/users/services/UpdateUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class UpdateUserController {
  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, email, password, cpf, deliveryman } = request.body;

    const updateDeliver = container.resolve(UpdateUserService);

    const deliver = await updateDeliver.execute({
      id,
      name,
      email,
      password,
      cpf,
      deliveryman,
    });
    return response.json(deliver);
  }
}
