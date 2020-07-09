import {Router} from 'express';
import {ItemService} from './services';

export default class ItemRoutes {
  public router: Router;
  public itemService: ItemService = new ItemService();

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/getItems', this.itemService.getItem);
    this.router.post('/createItem', this.itemService.postItem);
    this.router.put('/editItem', this.itemService.putItem);
    this.router.delete('/deleteItem', this.itemService.deleteItem);
  }
}