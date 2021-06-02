import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Departement } from 'src/app/models/departement';
import { Employe } from 'src/app/models/employe';
import { Projet } from 'src/app/models/projet';
import { Role } from 'src/app/models/role';
import { DepartementsService } from 'src/app/service/departements/departements.service';
import { RolesService } from 'src/app/service/role/role.service';
import { EmployesService } from 'src/app/service/employes/employes.service';
import { ProjetsService } from 'src/app/service/projets/projets.service';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {

  addEmployeForm: FormGroup;
  departements: any;
  projets: any;
  roles: any;
  emp: Employe;
  depart: Departement;
  proj: Projet;
  role: Role;

  constructor(private formBuilder: FormBuilder,
              public employeService: EmployesService,
              public departementService: DepartementsService,
              public projetService: ProjetsService,
              public roleService: RolesService,
              private router: Router) { }

  ngOnInit(): void {
    this.recupDataDepartement();
    this.recupDataProjet();
    this.recupDataRole();
    this.form();
  }

  form() {
    this.addEmployeForm = this.formBuilder.group({
      mail: ['', Validators.required, Validators.email],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      pwd: ['', Validators.required, Validators.minLength(6), Validators.maxLength(40)],
      iddepartement: ['', Validators.required],
      idprojet: ['', Validators.required],
      idrole: ['', Validators.required]
    });
  }

  recupDataDepartement() {
    this.departements = this.departementService.findAll().subscribe(
      (departements) => {
        this.departements = departements;
      },
      (error) => {
        console.log('error = ' + error.message);
      }
    );
  }

  recupDataProjet() {
    this.projets = this.projetService.findAll().subscribe(
      (projets) => {
        this.projets = projets;
      },
      (error) => {
        console.log('error = ' + error.message);
      }
    );
  }

  recupDataRole() {
    this.roles = this.roleService.findAll().subscribe(
      (roles) => {
        this.roles = roles;
      },
      (error) => {
        console.log('error = ' + error.message);
      }
    );
  }

  onSubmit() {
    const data = this.addEmployeForm.value;

    this.depart = {
      iddepartement: data.id
    };

    this.role = {
      idrole: data.id
    };

    this.proj = {
      idprojet: data.id
    };

    this.emp = {
      idemploye: data.id,
      prenom: data.prenom,
      nom: data.nom,
      mail: data.mail,
      pwd: data.pwd,
      departement: this.depart,
      projet: this.proj,
      role: this.role
    };

    this.employeService.add(this.emp);
  }
}
