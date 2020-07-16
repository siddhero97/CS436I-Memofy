import {Router} from 'express';
import passport from 'passport';
import '../../middlewares/passport';
import {CreateUserService, FetchUserService, LoginUserService} from './services';

export default class UserRoutes {
  public router: Router;
  public createUserService: CreateUserService = new CreateUserService();
  public fetchUserService: FetchUserService = new FetchUserService();
  public loginUserService: LoginUserService = new LoginUserService();

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.post('/signup', passport.authenticate('signup', {session: false}), this.createUserService.execute);
    this.router.post('/login', this.loginUserService.execute);
    this.router.get('/profile', passport.authenticate('jwt', {session: false}), this.fetchUserService.execute);
  }
}