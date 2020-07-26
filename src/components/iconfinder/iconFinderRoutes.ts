import {Router} from 'express';
import {SearchIconService} from './services';

export default class UserRoutes {
  public router: Router;
  public searchIconsService: SearchIconService = new SearchIconService();

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/icons/search', this.searchIconsService.execute);
  }
}