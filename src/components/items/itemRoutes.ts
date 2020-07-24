import {Router} from 'express';
import {CreateItemService, FetchItemService, DeleteItemService, UpdateItemService} from './services';

export default class BookRoutes {
  public router: Router;
  public createItemService: CreateItemService = new CreateItemService();
  public fetchItemService: FetchItemService = new FetchItemService();
  public deleteItemService: DeleteItemService = new DeleteItemService();
  public updateItemService: UpdateItemService = new UpdateItemService();

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/get', this.fetchItemService.execute);
    this.router.post('/post', this.createItemService.execute);
    this.router.put('/put', this.updateItemService.execute);
    this.router.delete('/del', this.deleteItemService.execute);
  }
}