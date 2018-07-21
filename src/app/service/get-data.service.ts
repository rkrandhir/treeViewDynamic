import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Data } from './data';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private _url='/assets/menu-data.json';
  constructor(private http : HttpClient) { }

  getData():Observable<Data[]> {
    return this.http.get<Data[]>(this._url)
  }
}
