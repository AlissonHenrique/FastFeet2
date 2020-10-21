import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/session.routes';
import deliversRouter from '@modules/delivers/infra/http/routes/deliver.routes';

const routes = Router();

routes.use('/session', sessionsRouter);
routes.use('/users', usersRouter);
routes.use('/delivers', deliversRouter);
export default routes;
