import {Router} from 'express';
import passport from 'passport';
import {CreateFridgeService, FetchFridgesService, DeleteFridgeService} from './services';

export default class FridgeRoutes {
    public router: Router;
    public createFridgeService: CreateFridgeService = new CreateFridgeService();
    public fetchFridgesService: FetchFridgesService = new FetchFridgesService();
    public deleteFridgeService: DeleteFridgeService = new DeleteFridgeService();

    constructor() {
      this.router = Router();
      this.routes();
    }

    routes() {
        this.router.get('/get/all', passport.authenticate('jwt', {session: false}), this.fetchFridgesService.execute);
        this.router.post('/post', passport.authenticate('jwt', {session: false}), this.createFridgeService.execute);
        this.router.delete('/del', passport.authenticate('jwt', {session: false}), this.deleteFridgeService.execute);
    }
}