import BaseApiService from "./base";

export class ChartsApiService extends BaseApiService {
  fetchExchangeChartData(params) {
    return this.request({
      method: "get",
      url: "api/v1/charts/exchange-data",
      params
    });
  }
}
