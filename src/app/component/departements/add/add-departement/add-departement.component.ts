import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartementsService } from 'src/app/service/departements/departements.service';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {

  addDepartementForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public departementService: DepartementsService) { }

  ngOnInit(): void {
    this.addDepartementForm = this.formBuilder.group({
      libelle: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const data = this.addDepartementForm.value;
    this.departementService.add(data);
  }
}
