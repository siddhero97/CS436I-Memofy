import express from 'express';
import compression from 'compression';
import cors from 'cors';
import {PORT} from './utils/constants';
import {mongoUri} from './utils/constants';
import {ItemRoutes} from './components/items';
import {BookRoutes} from './components/books';
import {MongoClient} from 'mongodb';
import {connect, connection, Document, Model, model, Schema, Types} from 'mongoose';
import UserRoutes from './components/users/userRoutes';

let ObjectId = Schema.Types.ObjectId;
let String = Schema.Types.String;
let Number = Schema.Types.Number;
let Date  = Schema.Types.Date;
// import ObjectId from 'Schema.Types.ObjectId';
// import ObjectId = module
export default class Server {
  public app: express.Application;
  private UserModel: Model<Document> | undefined;
  private ItemModel: Model<Document> | undefined;


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
    this.app.use('/items', new ItemRoutes().router);
    this.app.use('/users', new UserRoutes().router);
  }

  private mongo(): void {
    // let MongoClient = require('mongodb').MongoClient;
    connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(r => {
              console.log("Connection Is Successful");
        }

        )
        .catch(e => {
          console.error("Connection Failed", e);
        })
    //Get the default connection

//Bind connection to error event (to get notification of connection errors)
  }
}