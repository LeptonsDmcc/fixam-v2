export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const baseURL = process.env.FIXAM_BASE_URL;

const headers = {
  "Content-Type": "application/json",
};

class APIClient<TData, TVariables = Partial<any>> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = baseURL + endpoint;
  }

  getAll = async (
    path?: string,
    config?: RequestInit
  ): Promise<FetchResponse<TData> | TData[]> => {
    const response = await fetch(this.endpoint + (path || ""), config || {});
    if (!response.ok) {
      console.log(response);
    }

    return (await response.json()) as FetchResponse<TData>;
  };

  get = async (id: number | string): Promise<TData> => {
    const url = `${this.endpoint}/${id}`;
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return (await response.json()) as TData;
  };

  post = async (data: TVariables, path?: string): Promise<TData> => {
    const url = `${this.endpoint}/${path}`;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return (await response.json()) as TData;
  };
}

export default APIClient;
