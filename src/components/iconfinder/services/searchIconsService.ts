import {Request, Response} from 'express';
import axios from 'axios';
import {ICON_FINDER_BASE_ENDPOINT, ICON_FINDER_API_SECRET} from '../../../utils/constants';

export default class SearchIconService {
  public async execute(req: Request, res: Response): Promise<void> {
    const {query: {query, count}} = req;

    const params = new URLSearchParams();
    params.append('query', `${query} food`);
    params.append('count', count as string);

    const {data} = await axios.get(`${ICON_FINDER_BASE_ENDPOINT}/icons/search`, {
      params,
      headers: {
        'Authorization': `Bearer ${ICON_FINDER_API_SECRET}`
      }
    });

    res.json(data);
  }
}