import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:8888/role';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: HttpClient) { }

  public findAll() {
    return this.http.get<any>(baseUrl + '/list')
    .map(res => {
      return res;
    })
  }
}
