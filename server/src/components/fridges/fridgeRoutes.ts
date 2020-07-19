import {Router} from 'express';
import {CreateFridgeService} from './services';

export default class FridgeRoutes {
    public router: Router;
    public createFridgeService: CreateFridgeService = new CreateFridgeService();
    // will fill in rest of services

    constructor() {
      this.router = Router();
      this.routes();
    }

    routes() {
        // this.router.get('/get');
        this.router.post('/post', this.createFridgeService.execute);
        // this.router.delete('/delete');
    }
}