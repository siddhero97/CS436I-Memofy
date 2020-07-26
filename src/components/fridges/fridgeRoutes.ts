import {Router} from 'express';
import passport from 'passport';
import '../../middlewares/passport';

export default class FridgeRoutes {
    public router: Router;
    // will fill in rest of services

    constructor() {
      this.router = Router();
      this.routes();
    }

    routes() {
        this.router.get('/get');
        this.router.post('/post');
        this.router.delete('/delete');
    }
} 