import {Router} from 'express';
import passport from 'passport';
import '../../middlewares/passport';
import {CreateUserService, FetchUserService, LoginUserService} from './services';
import UpdateUserService from './services/updateUserService';

export default class UserRoutes {
  public router: Router;
  public createUserService: CreateUserService = new CreateUserService();
  public fetchUserService: FetchUserService = new FetchUserService();
  public loginUserService: LoginUserService = new LoginUserService();
  public updateUserService: UpdateUserService = new UpdateUserService();

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.post('/signup', passport.authenticate('signup', {session: false}), this.createUserService.execute);
    this.router.post('/login', this.loginUserService.execute);
    this.router.get('/get', passport.authenticate('jwt', {session: false}), this.fetchUserService.execute);
    this.router.put('/edit', passport.authenticate('jwt', {session: false}), this.updateUserService.execute);
  }
}
