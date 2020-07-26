import axios from 'axios';

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

  const {data} = await axios.get<SearchIconsResponse>('/api/iconfinder/icons/search', {
    params
  });

  return data;
}