import {Router} from 'express';
import {CreateFridgeService, FetchFridgeService, DeleteFridgeService} from './services';

export default class FridgeRoutes {
    public router: Router;
    public createFridgeService: CreateFridgeService = new CreateFridgeService();
    public fetchFridgeService: FetchFridgeService = new FetchFridgeService();
    public deleteFridgeService: DeleteFridgeService = new DeleteFridgeService();

    constructor() {
      this.router = Router();
      this.routes();
    }

    routes() {
        this.router.get('/get', this.fetchFridgeService.execute);
        this.router.post('/post', this.createFridgeService.execute);
        this.router.delete('/delete', this.deleteFridgeService.execute);
    }
}