import { Router } from 'express';
import midlewareAuthenticate from '@modules/users/infra/http/midlewares/midlewareAuthenticate';
import midlewareAdmin from '@modules/users/infra/http/midlewares/midlewareAdmin';
import DeliverController from '../controllers/DeliverController';
import UpdateController from '../controllers/UpdateController';
import ListController from '../controllers/ListController';
import DeleteController from '../controllers/DeleteDeliverController';
import DeliverToUserController from '../controllers/DeliverToUserController';
import DeliverStartDateController from '../controllers/DeliverStartDateController';
import DeliverEndDateController from '../controllers/DeliverEndDateController';

const deliverRouter = Router();
const deliverController = new DeliverController();
const updateController = new UpdateController();
const listController = new ListController();
const deleteController = new DeleteController();
const deliverToUserController = new DeliverToUserController();
const deliverStartDateController = new DeliverStartDateController();
const deliverEndDateController = new DeliverEndDateController();
// deliverRouter.use(midlewareAuthenticate);
// deliverRouter.use(midlewareAdmin);
deliverRouter.post('/', deliverController.create);
deliverRouter.put('/:id', updateController.update);
deliverRouter.get('/', listController.index);
deliverRouter.delete('/:id', deleteController.delete);
deliverRouter.get('/:id', deliverToUserController.show);
deliverRouter.put('/start/:id', deliverStartDateController.update);
deliverRouter.put('/end/:id', deliverEndDateController.update);
export default deliverRouter;
