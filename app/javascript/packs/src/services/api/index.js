import { ChartsApiService } from "./charts";

class ApiService {
  constructor() {
    this.charts = new ChartsApiService();
  }
}

export const Api = new ApiService();
