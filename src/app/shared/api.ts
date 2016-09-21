import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class ApiService {
  headers: Headers = new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  })

  api_url: string = 'http://localhost:3500/'

  constructor(private http: Http) {
  }

  private getJson(response: Response) {
    response.json()
  }

  private checkForError(response: Response): Response {
    if(response.status >=200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error['response'] = response
      throw error
    }
  }

  get(path: string): Observable<any> {
    return this.http.get(`${this.api_url}${path}`, {headers: this.headers})
      .map(this.checkForError)
      .catch( err => {Observable.throw(err)})
      .map(this.getJson)
  }

  post(path: string, body): Observable<any> {
    return this.http.post(`${this.api_url}${path}`
      , JSON.stringify(body)
      , {headers: this.headers})
      .map(this.checkForError)
      .catch( err => {Observable.throw(err)})
      .map(this.getJson)
  }
}