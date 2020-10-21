import AppError from '@shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import User from '../../typeorm/entities/User';

export default async function midlewareAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  const { id } = request.user;

  const userRepository = getRepository(User);
  const user = await userRepository.findOne({ id });

  if (user?.deliveryman === false) {
    throw new AppError('not authorization', 401);
  }
  return next();
}
