import { Projet } from './../../models/projet';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

const baseUrl = 'http://localhost:8888/projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {

  constructor(private http: HttpClient, private router: Router) { }

  public findById(id: string | null) {
    return this.http.get<any>(baseUrl + '/list/' + id)
    .map(res => {
      return res;
    });
  }
  public findByDate(dateDebut: Date, dateFin: Date) {
    return this.http.get<any>(baseUrl + '/date/dateDebut/' + dateDebut + '/dateFin/' + dateFin)
    .map(res => {
      return res;
    });
  }

  public findAll(): Observable<Projet[]> {
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

  public update(idprojet: number, data: any) {
    return this.http.put(baseUrl + '/update/' + idprojet, data).subscribe(
      () => {
        this.router.navigate(['projet/list']);
      }
    );
  }

  public remove(id: number) {
    return this.http.delete(baseUrl + '/delete/' + id).subscribe(
      () => {}
    );
  }
}
