import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

const baseUrl = 'http://localhost:8888/departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementsService {

  constructor(private http: HttpClient, private router: Router) { }

  public findById(id: number | null) {
    return this.http.get<any>(baseUrl + '/list/' + id)
    .map(res => {
      return res;
    });
  }

  public findAll() {
    return this.http.get(baseUrl + '/list')
    .map(res => {
      return res;
    });
  }

  public add(data: any) {
    return this.http.post(baseUrl + '/add', data).subscribe(
      () => {
        this.router.navigate(['departement/list']);
      }
    );
  }

  public update(id: number, data: any) {
    return this.http.put(baseUrl + '/update/' + id, data).subscribe(
      () => {
        this.router.navigate(['departement/list']);
      }
    );
  }

  public remove(id: number) {
    return this.http.delete(baseUrl + '/delete/' + id).subscribe(
      () => {
        console.log('yes');
      }
    );
  }

}
