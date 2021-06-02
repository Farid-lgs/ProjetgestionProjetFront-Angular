import { Departement } from 'src/app/models/departement';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartementsService } from 'src/app/service/departements/departements.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.css']
})
export class DepartementsComponent implements OnInit {

  departements: any;

  constructor(public departementService: DepartementsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.reloadDepartement();
  }


  reloadDepartement() {
    this.departements = this.departementService.findAll().subscribe(
      (departements) => {
        this.departements = departements;
      },
      (error) => {
        console.log('error = ' + error.message);
      }
    );
  }

  onRemoveDepartement(id: number) {
    this.departementService.remove(id);

    setTimeout(
      () => {

        this.reloadDepartement();
      }, 1000);
  }

  updateDepartement(id: number){
    this.router.navigate(['/departement/update', id]);
  }

}
