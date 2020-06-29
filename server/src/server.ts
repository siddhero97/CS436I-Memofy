import express from 'express';
import compression from 'compression';
import cors from 'cors';
import {PORT} from './utils/constants';
import {BookRoutes} from './components/books';

export default class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.mongo();
  }

  public start(): void {
    this.app.listen(this.app.get('port'), () => {
      console.log(`API is running on port ${this.app.get('port')}`);
    })
  }

  private config(): void {
    this.app.set('port', PORT);
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: false}));
    this.app.use(compression());
    this.app.use(cors());
  }

  private routes(): void {
    //example routes
    this.app.use('/books', new BookRoutes().router);
  }

  private mongo(): void {
    // initialize mongodb connection here
  }
}