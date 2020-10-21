import { Router } from 'express';

import UserController from '../controllers/UserController';
// import midlewareAuthenticate from '../midlewares/midlewareAuthenticate';
import ShowUserController from '../controllers/ShowUserController';

import UpdateUserController from '../controllers/UpdateUserController';
// import midlewareAdmin from '../midlewares/midlewareAdmin';
import DeleteController from '../controllers/DeleteController';

const usersRouter = Router();

const userController = new UserController();
const showUserController = new ShowUserController();
const updateUserController = new UpdateUserController();
const deleteController = new DeleteController();

usersRouter.post('/', userController.create);
// usersRouter.use(midlewareAuthenticate);
// usersRouter.use(midlewareAdmin);
usersRouter.get('/', showUserController.index);
usersRouter.put('/', updateUserController.update);
usersRouter.delete('/:id', deleteController.delete);
export default usersRouter;
