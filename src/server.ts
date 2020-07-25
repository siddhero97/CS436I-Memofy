import express from 'express';
import * as path from 'path';
import mongoose from 'mongoose';
import compression from 'compression';
import cors from 'cors';
import {MONGO_URL} from './utils/constants';
import {ItemRoutes} from './components/items';
import {UserRoutes} from './components/users';
import {FridgeRoutes} from './components/fridges';

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
    this.app.set('port', process.env.PORT || 5000);
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: false}));
    this.app.use(compression());
    this.app.use(cors());
    this.app.use(express.static(path.join(__dirname, '/../client/build')))
  }

  private routes(): void {
    this.app.use('/api/users', new UserRoutes().router);
    this.app.use('/api/items', new ItemRoutes().router);
    this.app.use('/api/fridges', new FridgeRoutes().router);
    this.app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname + '/../client/build/index.html'))
    })
  }

  private mongo(): void {
    const {connection} = mongoose;

    connection.on('connected', () => {
      console.log('Mongo Connection Established');
    });

    connection.on('reconnected', () => {
      console.log('Mongo Connection Restablished');
    });

    connection.on('disconnected', () => {
      console.log('Mongo Connection Disconnected');
      console.log('Trying to reconnect to Mongo...');
      setTimeout(() => {
        mongoose.connect(MONGO_URL, {
          keepAlive: true,
          socketTimeoutMS: 3000,
          connectTimeoutMS: 3000,
          useUnifiedTopology: true,
          useNewUrlParser: true,
        });
      }, 3000);
    });
    connection.on('close', () => {
      console.log('Mongo Connection Closed');
    });

    connection.on('error', (error: Error) => {
      console.log(`Mongo Connection Error: ${error}`);
    });

    const run = async () => {
      await mongoose.connect(MONGO_URL, {
        keepAlive: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
    };

    run().catch(error => console.error(error));
  }
}
