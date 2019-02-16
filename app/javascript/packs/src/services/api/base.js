import axios from "axios";
import { config } from "../../config";
import { makeError } from "../../libs/Errors";

export default class BaseApiService {
  handleResponse(response) {
    return response.data;
  }

  handleError(error) {
    // error.response.data.error <- formatted in koa middleware | adapt if needed to be more verbose

    // The request was made and the server responded with a status code
    if (error.response)
      throw makeError(error.response.status, error.response.data.error);

    // The request was made but no response was received
    if (error.request) throw makeError(500, "Failed to connect to server");

    // Something happened in setting up the request that triggered an Error
    throw makeError(400, error.message);
  }

  request = ({ method, url, params, data, withCredentials = true }) => {
    const headers = withCredentials ? this.getCredentialHeader() : {};

    return axios({
      baseURL: config.apiUrl,
      timeout: 4000,
      maxContentLength: 5000,
      method,
      url,
      headers,
      params,
      data
    }).then(this.handleResponse, this.handleError);
  };

  getCredentialHeader() {
    return { Authorization: `Bearer ${localStorage.authToken}` };
  }
}
