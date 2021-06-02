import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Module } from 'src/app/models/module';
import { Tache } from 'src/app/models/tache';
import { ModulesService } from 'src/app/service/modules/modules.service';
import { TachesService } from 'src/app/service/taches/taches.service';

@Component({
  selector: 'app-add-tache',
  templateUrl: './add-tache.component.html',
  styleUrls: ['./add-tache.component.css']
})
export class AddTacheComponent implements OnInit {

  addTacheForm: FormGroup;
  mod: any;
  taches: Tache;
  modules: Module;

  constructor(private formBuilder: FormBuilder,
              public tacheService: TachesService,
              public moduleService: ModulesService) { }

  ngOnInit(): void {
    this.recupDataModule();
    this.form();

  }

  form() {
    this.addTacheForm = this.formBuilder.group({
      libelle: ['', Validators.required],
      datedebut: ['', Validators.required],
      datefinestimee: [''],
      datefinreel: [''],
      idmodule: ['', Validators.required]
    });
  }

  recupDataModule() {
    this.mod = this.moduleService.findAll().subscribe(
      (mod) => {
        this.mod = mod;
      },
      (error) => {
        console.log('error = ' + error.message);
      }
    );
  }

  onSubmit() {
    const data = this.addTacheForm.value;

    this.modules = {
      idmodule: parseInt(data.idmodule)
    };

    this.taches = {
      idtache: data.idtache,
      libelle: data.libelle,
      datedebut: data.datedebut,
      datefinestimee: data.datefinestimee,
      datefinreel: data.datefinreel,
      module: this.modules
    };

    console.log(this.taches);
    this.tacheService.add(this.taches);
  }
}
