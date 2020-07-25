import {Router} from 'express';
import {CreateItemService, FetchItemService, DeleteItemService, UpdateItemService} from './services';
import passport from 'passport';

export default class ItemRoutes {
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
    this.router.get('/get/all', passport.authenticate('jwt', {session: false}), this.fetchItemService.execute);
    this.router.post('/post', passport.authenticate('jwt', {session: false}), this.createItemService.execute);
    this.router.put('/edit', passport.authenticate('jwt', {session: false}), this.updateItemService.execute);
    this.router.delete('/del', passport.authenticate('jwt', {session: false}), this.deleteItemService.execute);
  }
}