import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjetsService } from 'src/app/service/projets/projets.service';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.css']
})
export class AddProjetComponent implements OnInit {

  addProjetForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public projetService: ProjetsService) { }

  ngOnInit(): void {
    this.addProjetForm = this.formBuilder.group({
      client: ['', Validators.required],
      code: ['', Validators.required],
      titre: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
      datedebut: ['', Validators.required],
      datefinestimee: ['', Validators.required],
      datefinreel: ['', Validators.required]
    });
  }

  onSubmit() {
    const data = this.addProjetForm.value;
    this.projetService.add(data);
  }
}
