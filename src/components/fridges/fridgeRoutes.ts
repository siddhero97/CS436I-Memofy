import {Router} from 'express';
import passport from 'passport';
import {CreateFridgeService, FetchFridgesService, DeleteFridgeService, UpdateFridgeService} from './services';

export default class FridgeRoutes {
    public router: Router;
    public createFridgeService: CreateFridgeService = new CreateFridgeService();
    public fetchFridgesService: FetchFridgesService = new FetchFridgesService();
    public deleteFridgeService: DeleteFridgeService = new DeleteFridgeService();
    public updateFridgeService: UpdateFridgeService = new UpdateFridgeService();

    constructor() {
      this.router = Router();
      this.routes();
    }

    routes() {
        this.router.get('/get', passport.authenticate('jwt', {session: false}), this.fetchFridgesService.execute);
        this.router.post('/post', passport.authenticate('jwt', {session: false}), this.createFridgeService.execute);
        this.router.delete('/del', passport.authenticate('jwt', {session: false}), this.deleteFridgeService.execute);
        this.router.put('/edit', passport.authenticate('jwt', {session: false}), this.updateFridgeService.execute)
    }
}