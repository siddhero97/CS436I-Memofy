import {Router} from 'express';
import {CreateItemService, FetchItemsService, DeleteItemService, UpdateItemService} from './services';
import passport from 'passport';

export default class ItemRoutes {
  public router: Router;
  public createItemService: CreateItemService = new CreateItemService();
  public fetchItemsService: FetchItemsService = new FetchItemsService();
  public deleteItemService: DeleteItemService = new DeleteItemService();
  public updateItemService: UpdateItemService = new UpdateItemService();

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/get', passport.authenticate('jwt', {session: false}), this.fetchItemsService.execute);
    this.router.post('/post', passport.authenticate('jwt', {session: false}), this.createItemService.execute);
    this.router.put('/edit', passport.authenticate('jwt', {session: false}), this.updateItemService.execute);
    this.router.delete('/del', passport.authenticate('jwt', {session: false}), this.deleteItemService.execute);
  }
}