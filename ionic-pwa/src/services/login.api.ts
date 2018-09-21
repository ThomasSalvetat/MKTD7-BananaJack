import { Player } from '../models/model';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

export class LoginApi {

    constructor(readonly url: string,
                readonly httpService: HttpService) {}
    
    // Auth
    login(name: string): Observable<Player> {
        return this.httpService.post(`${this.url}/api/auth/login`, {name});
    }

}
