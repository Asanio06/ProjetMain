import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, timeout} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SendDataService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  sendData(doigt: string, angle: string): Observable<any> {
    return this.http.post<any>(`${this.url}/?doigt=${doigt}&angle=${angle}`,{});
  }

}
