import {Router} from 'express';
import {UserService} from './services';

export default class UserRoutes {
  public router: Router;
  public userService: UserService = new UserService();

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/getUsers', this.userService.getUser);
    this.router.post('/createUsers', this.userService.postUser);
    this.router.delete('/deleteUsers', this.userService.deleteUser);
  }
}