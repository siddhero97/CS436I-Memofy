import {Request, Response, NextFunction} from 'express';

const books = [
  {
    name: 'Harry Potter',
  },
  {
    name: 'Lord of the Rings',
  }
];

export default class BookExampleService {
  public async execute(req: Request, res: Response, next: NextFunction) {
    res.json({
      message: 'You hit the example route!',
      books,
    });
  }
}