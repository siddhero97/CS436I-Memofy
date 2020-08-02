import {Router} from 'express';
import passport from 'passport';
import {
  CreateFeedAlertService,
  FetchFridgeAlertsService,
} from './services';

export default class FeedAlertRoutes {
    public router: Router;
    public createFeedAlertService: CreateFeedAlertService = new CreateFeedAlertService();
    public fetchFeedAlertsService: FetchFridgeAlertsService = new FetchFridgeAlertsService();

    constructor() {
      this.router = Router();
      this.routes();
    }

    routes() {
      this.router.get('/get', passport.authenticate('jwt', {session: false}), this.fetchFeedAlertsService.execute);
      this.router.post('/post', passport.authenticate('jwt', {session: false}), this.createFeedAlertService.execute);
    }
}