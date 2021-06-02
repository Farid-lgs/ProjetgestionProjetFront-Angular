import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Module } from 'src/app/models/module';
import { Projet } from 'src/app/models/projet';
import { ModulesService } from 'src/app/service/modules/modules.service';
import { ProjetsService } from 'src/app/service/projets/projets.service';

@Component({
  selector: 'app-update-module',
  templateUrl: './update-module.component.html',
  styleUrls: ['./update-module.component.css']
})
export class UpdateModuleComponent implements OnInit {

  updateModuleForm: FormGroup;
  mod: any;
  proj: any;
  modules: Module;
  projets: Projet;
  id: any;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              public moduleService: ModulesService,
              public projetService: ProjetsService) { }

  ngOnInit(): void {
    this.recupDataModule();
    this.recupDataProjet();

    setTimeout(() => {
      this.form();
    }, 1000);
  }

  form() {
    this.updateModuleForm = this.formBuilder.group({
      idmodule: [this.mod.idmodule, Validators.required],
      nom: [this.mod.nom, Validators.required],
      datedebut: [this.mod.datedebut, Validators.required],
      datefinestimee: [this.mod.datefinestimee],
      datefinreel: [this.mod.datefinreel],
      idprojet: [this.mod.idprojet, Validators.required]
    });
  }

  recupDataModule() {
    this.id = this.route.snapshot.paramMap.get('idModule');

    this.mod = this.moduleService.findById(this.id).subscribe(
      (mod) => {
        this.mod = mod;
      },
      (error) => {
        console.log('error = ' + error.message);
      }
    );
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
    const data = this.updateModuleForm.value;

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

    this.moduleService.update(this.id, this.modules);
  }

}
