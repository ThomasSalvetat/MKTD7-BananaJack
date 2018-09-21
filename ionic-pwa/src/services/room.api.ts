import { Player } from '../models/model';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

export class RoomApi {

    constructor(readonly url: string,
                readonly httpService: HttpService) {}
    
    // Auth
    update(): Observable<Player> {
        return this.httpService.get(`${this.url}/api/room`);
    }

}
