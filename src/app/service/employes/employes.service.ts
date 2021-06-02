import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';

const baseUrl = 'http://localhost:8888/employe';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  constructor(private http: HttpClient, private router: Router) { }

  public findById(id: string | null) {
    return this.http.get<any>(baseUrl + '/list/' + id)
    .map(res => {
      return res;
    });
  }

  findByProjet(id: string | null) {
    return this.http.get<any>(baseUrl + '/projet/' + id)
    .map(res => {
      return res;
    });
  }

  public findAll() {
    return this.http.get<any>(baseUrl + '/list')
    .map(res => {
      return res;
    });
  }

  public add(data: any) {
    return this.http.post(baseUrl + '/add', data).subscribe(
      () => {
        this.router.navigate(['employe/list']);
      }
    );
  }

  public update(id: number, data: any) {
    return this.http.put(baseUrl + '/update/' + id, data).subscribe(
      () => {
        this.router.navigate(['employe/list']);
      }
    );
  }

  public remove(id: number) {
    return this.http.delete(baseUrl + '/delete/' + id).subscribe(
      () => { }
    );
  }
}
