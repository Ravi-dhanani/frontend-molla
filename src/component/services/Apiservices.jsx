import config from "../config";
import HttpService from "./HttpService";
class ApiServices {
  static register(data) {
    return HttpService.post(`${config.API_URL}/admin/register`, data);
  }

  static login(data) {
    return HttpService.post(`${config.API_URL}/admin/login`, data);
  }

  static async getLstCarousel() {
    let res = await HttpService.get(
      `${config.API_URL}/api/getCarousel`,
      localStorage.token
    );
    return res.data;
  }

  static async getLstCategory() {
    let res = await HttpService.get(
      `${config.API_URL}/api/getCategory`,
      localStorage.token
    );
    return res.data;
  }
}

export default ApiServices;
