import axios from 'axios';
import {BASE_ENDPOINT, API_SECRET} from './constants';

interface SearchIconsResponse {
  icons: Icon[];
}

interface Icon {
  raster_sizes: RasterSize[];
}

interface RasterSize {
  formats: Format[];
}

interface Format {
  preview_url: string;
}

export default async function searchIcons(query: string): Promise<SearchIconsResponse> {
  const params = new URLSearchParams();
  params.append('query', `${query} food`);
  params.append('count', '10');

  const {data} = await axios.get<SearchIconsResponse>(`${BASE_ENDPOINT}/icons/search`, {
    params,
    headers: {
      'Authorization': `Bearer ${API_SECRET}`
    }
  });

  return data;
}