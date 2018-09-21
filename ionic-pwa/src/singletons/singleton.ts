import { LoginApi } from '../services/login.api';
import { HttpService } from '../services/http.service';
import { RoomApi } from '../services/room.api';

export const backendURL = 'http://ilaborie.org:9898';
export const httpService = new HttpService();
export const loginApi = new LoginApi(backendURL, httpService);
export const roomApi = new RoomApi(backendURL, httpService);
