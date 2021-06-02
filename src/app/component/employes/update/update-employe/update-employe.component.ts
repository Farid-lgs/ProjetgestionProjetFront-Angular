import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Departement } from 'src/app/models/departement';
import { Employe } from 'src/app/models/employe';
import { Projet } from 'src/app/models/projet';
import { Role } from 'src/app/models/role';
import { DepartementsService } from 'src/app/service/departements/departements.service';
import { EmployesService } from 'src/app/service/employes/employes.service';
import { ProjetsService } from 'src/app/service/projets/projets.service';
import { RolesService } from 'src/app/service/role/role.service';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: ['./update-employe.component.css']
})
export class UpdateEmployeComponent implements OnInit {

  updateEmployeForm: FormGroup;
  employe: any;
  departements: any;
  projets: any;
  roles: any;
  emp: Employe;
  depart: Departement;
  proj: Projet;
  role: Role;
  id: any;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              public employeService: EmployesService,
              public departementService: DepartementsService,
              public projetService: ProjetsService,
              public roleService: RolesService) { }

  ngOnInit(): void {
    this.recupData();
    this.recupDataDepartement();
    this.recupDataProjet();
    this.recupDataRole();

    setTimeout(() => {
      this.form();
    }, 1000);
  }

  form() {
    this.updateEmployeForm = this.formBuilder.group({
      idemploye: [this.employe.idemploye, Validators.required],
      mail: [this.employe.mail, Validators.required],
      nom: [this.employe.nom, Validators.required],
      prenom: [this.employe.prenom, Validators.required],
      pwd: [this.employe.pwd, Validators.required],
      iddepartement: [this.employe.iddepartement, Validators.required],
      idprojet: [this.employe.idprojet, Validators.required],
      idrole: [this.employe.idrole, Validators.required]
    });
  }

  recupData() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.employe = this.employeService.findById(this.id).subscribe(
      (employe) => {
        this.employe = employe;
      },
      (error) => {
        console.log('error = ' + error.message);
      }
    );
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
    const data = this.updateEmployeForm.value;

    this.depart = {
      iddepartement: parseInt(data.iddepartement)
    };

    this.role = {
      idrole: parseInt(data.idrole)
    };

    this.proj = {
      idprojet: parseInt(data.idprojet)
    };

    this.emp = {
      idemploye: data.idemploye,
      prenom: data.prenom,
      nom: data.nom,
      mail: data.mail,
      pwd: data.pwd,
      departement: this.depart,
      projet: this.proj,
      role: this.role
    };

    this.employeService.update(this.id, this.emp);
  }
}
