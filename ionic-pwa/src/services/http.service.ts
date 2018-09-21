import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';

export class HttpService {

  private handle<T>(res: Response): Promise<T> {
    if (res.ok) {
      return res.json();
    } else {
      return res.text()
        .then(msg => Promise.reject(msg));
    }
  }

  private async postJson<T>(url: string, json: any): Promise<T> {
    const request: RequestInit = {
      method: 'POST',
      body: JSON.stringify(json)
    };
    return fetch(url, request)
      .then(res => this.handle<T>(res));
  };

  private getJson<T>(url: string): Promise<T> {
    return fetch(url)
      .then(res => this.handle<T>(res));
  }

  post<T>(url: string, json: {}): Observable<T> {
    return fromPromise(
      this.postJson(url, json)
    );
  }

  get<T>(url: string): Observable<T> {
    return fromPromise(
      this.getJson(url)
    )
  }
}
