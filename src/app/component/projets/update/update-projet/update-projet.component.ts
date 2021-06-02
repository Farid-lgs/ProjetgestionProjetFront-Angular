import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProjetsService } from 'src/app/service/projets/projets.service';

@Component({
  selector: 'app-update-projet',
  templateUrl: './update-projet.component.html',
  styleUrls: ['./update-projet.component.css']
})

export class UpdateProjetComponent implements OnInit {

  updateProjetForm: FormGroup;
  projet: any;
  idprojet: any;

  constructor(private formBuilder: FormBuilder,
              public projetService: ProjetsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recupData();

    setTimeout(() => {
      this.form();
    }, 1000);
  }

  form() {
    this.updateProjetForm = this.formBuilder.group({
      idprojet: [this.projet.idprojet, Validators.required],
      client: [this.projet.client, Validators.required],
      code: [this.projet.code, Validators.required],
      titre: [this.projet.titre, Validators.required],
      type: [this.projet.type, Validators.required],
      description: [this.projet.description, Validators.required],
      datedebut: [this.projet.datedebut, Validators.required],
      datefinestimee: [this.projet.datefinestimee, Validators.required],
      datefinreel: [this.projet.datefinreel]
    });
  }

  recupData() {
    this.idprojet = this.route.snapshot.paramMap.get('id');
    this.projet = this.projetService.findById(this.idprojet).subscribe(
      (projet) => {
        this.projet = projet;
      },
      (error) => {
        console.log('error = ' + error.message);
      }
    );
  }

  onSubmit() {
    const data = this.updateProjetForm.value;
    this.projetService.update(this.idprojet, data);
  }
}
