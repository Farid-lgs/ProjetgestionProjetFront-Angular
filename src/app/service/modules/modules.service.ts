import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const baseUrl = 'http://localhost:8888/module';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  constructor(private http: HttpClient, private router: Router) { }

  public findById(id: string | null) {
    return this.http.get<any>(baseUrl + '/list/' + id)
    .map(res => {
      return res;
    });
  }

  findByProjet(id: string | null) {
    return this.http.get<any>(baseUrl + '/projet/'+ id)
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
        this.router.navigate(['projet/list']);
      }
    );
  }

  public update(id: number, data: any) {
    return this.http.put(baseUrl + '/update/' + id, data).subscribe(
      () => {
        this.router.navigate(['projet/list']);
      }
    );
  }
}
