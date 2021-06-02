import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjetsService } from 'src/app/service/projets/projets.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  triByDateForm: FormGroup;
  projets: any;

  constructor(private formBuilder: FormBuilder, public projetService: ProjetsService,  private router: Router) {
      this.displayProjet();
     }

  ngOnInit(): void {
    this.triByDateForm = this.formBuilder.group({
      datedebut: ['', Validators.required],
      datefinestimee: ['', Validators.required]
    });
  }

  displayProjet() {
    this.projets = this.projetService.findAll().subscribe(
      (projets) => {
        this.projets = projets;
      },
      (error) => {
        console.log('error=' + error.message);
      }
    );
  }

  onRemoveProjet(id: number) {
    this.projetService.remove(id);

    setTimeout(
      () => {
        this.displayProjet();
      }, 1000);
  }

  onSubmit() {
    const data = this.triByDateForm.value;
    this.projets = this.projetService.findByDate(data.datedebut, data.datefinestimee).subscribe(
      (projets) => {
        console.log(projets);
        this.projets = projets;
      },
      (error) => {
        console.log('error=' + error.message);
      }
    );
    console.log('aa');
  }

  updateProjet(id: number){
    this.router.navigate(['/projet/update', id]);
  }
  detailProjet(id: number){
    this.router.navigate(['/projet/', id]);
  }
}
