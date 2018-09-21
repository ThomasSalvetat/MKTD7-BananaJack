import { LoginApi } from '../services/login.api';
import { HttpService } from '../services/http.service';

export const backendURL = 'http://ilaborie.org:9898';
export const httpService = new HttpService();
export const loginApi = new LoginApi(backendURL, httpService);
