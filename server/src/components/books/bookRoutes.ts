import {Router} from 'express';
import {BookExampleService} from './services';

export default class BookRoutes {
  public router: Router;
  public bookExampleService: BookExampleService = new BookExampleService();

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/example', this.bookExampleService.execute);
  }
}