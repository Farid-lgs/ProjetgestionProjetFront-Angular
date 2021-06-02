import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Module } from 'src/app/models/module';
import { Projet } from 'src/app/models/projet';
import { ModulesService } from 'src/app/service/modules/modules.service';
import { ProjetsService } from 'src/app/service/projets/projets.service';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css']
})
export class AddModuleComponent implements OnInit {

  addModuleForm: FormGroup;
  proj: any;
  modules: Module;
  projets: Projet;

  constructor(private formBuilder: FormBuilder,
              public moduleService: ModulesService,
              public projetService: ProjetsService) { }

  ngOnInit(): void {
    this.recupDataProjet();
    this.form();
  }

  form() {
    this.addModuleForm = this.formBuilder.group({
      nom: ['', Validators.required],
      datedebut: ['', Validators.required],
      datefinestimee: [''],
      datefinreel: [''],
      idprojet: ['', Validators.required]
    });
  }

  recupDataProjet() {
    this.proj = this.projetService.findAll().subscribe(
      (proj) => {
        this.proj = proj;
      },
      (error) => {
        console.log('error = ' + error.message);
      }
    );
  }

  onSubmit() {
    const data = this.addModuleForm.value;

    this.projets = {
      idprojet: parseInt(data.idprojet)
    };

    this.modules = {
      idmodule: data.idmodule,
      nom: data.nom,
      datedebut: data.datedebut,
      datefinestimee: data.datefinestimee,
      datefinreel: data.datefinreel,
      projet: this.projets
    };

    this.moduleService.add(this.modules);
  }
}
