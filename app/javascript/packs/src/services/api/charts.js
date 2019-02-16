import BaseApiService from "./base";

export class ChartsApiService extends BaseApiService {
  fetchBRLToEURChartData() {
    return this.request({
      method: "get",
      url: "api/v1/charts/brl-to-eur"
    });
  }

  fetchBRLToUSDChartData() {
    return this.request({
      method: "get",
      url: "api/v1/charts/brl-to-usd"
    });
  }

  fetchBRLToAUDChartData() {
    return this.request({
      method: "get",
      url: "api/v1/charts/brl-to-aud"
    });
  }
}
