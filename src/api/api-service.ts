import axios , { AxiosInstance } from "axios";

export default class ApiService {

  protected static instance: ApiService;

  protected baseUrl: string;

  public axios!: AxiosInstance;

  protected constructor() {
    this.baseUrl = 'https://jsonplaceholder.typicode.com';
  }

  protected init() {
    this.axios = axios.create({
      baseURL: this.baseUrl,
      headers: {
        "Content-type": "application/json",
      }
    });
  }

  public static async getInstance(): Promise<ApiService> {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
      ApiService.instance.init();
    }

    return ApiService.instance;
  }

  public get = (url: string) => this.axios.get(url)
  public post = (url: string, body: {}) => this.axios.post(url, body)
  public put = (url: string, body?: {}) => this.axios.put(url, body)
  public delete = (url: string, body?: {}) => this.axios.delete(url, body)

}